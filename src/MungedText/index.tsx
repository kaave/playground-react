/* eslint-disable no-param-reassign, unicorn/prefer-spread */
// https://jp.residentadvisor.net/features/3492

import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';

type Munge = {
  mask: string;
  pattern: RegExp;
};

type Props = {
  children: string;
  munges?: Munge[];
  intervalFactor?: number;
  stabilisationIncrement?: number;
};

export const defaultMunges: Munge[] = [
  {
    mask: '█▓▒░▖▗▝▘▙▟▚▞▛▜!#$%&()*+0123456789<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]abcdefghijklmnopqrstuvwxyz{|}~',
    pattern: /[\dA-Za-z]/,
  },
];

const useInterval = (factor: number) => useCallback(() => Math.floor(Math.random() * factor), [factor]);
const useMunge = (munges: Munge[]) =>
  useCallback(
    (c: string) => {
      const mask = munges.find(({ pattern }) => pattern.test(c))?.mask;
      return mask?.[Math.floor(Math.random() * mask.length)] ?? c;
    },
    [munges],
  );

export const MungedText = ({
  children: originalContent,
  munges = defaultMunges,
  stabilisationIncrement = 0.005,
  intervalFactor = 150,
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [munged, setMunged] = useState<'unmunged' | 'munging' | 'munged'>('unmunged');
  const interval = useInterval(intervalFactor);
  const munge = useMunge(munges);
  const mungedContent = useMemo(
    () =>
      originalContent
        .split('')
        .map((c) => munge(c))
        .join(''),
    [originalContent, munge],
  );
  const [content, setContent] = useState(mungedContent);

  const stabilise = useCallback(
    (currentContent: string, threshold: number) => {
      const nextContent = originalContent
        .split('')
        .map((c, i) => (Math.random() > threshold ? currentContent[i] : c))
        .join('');

      setContent(nextContent);
      if (nextContent !== originalContent) {
        window.setTimeout(() => stabilise(nextContent, threshold + stabilisationIncrement), interval());
      } else {
        setMunged('munged');
      }
    },
    [originalContent, interval, stabilisationIncrement],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (munged === 'munging') return;
        if (!entry.isIntersecting) {
          setMunged('unmunged');
          return;
        }
        if (munged === 'munged') return;

        setMunged('munging');
        window.setTimeout(() => stabilise(mungedContent, 0), 30);
      }),
    );

    observer.observe(el);

    // eslint-disable-next-line consistent-return
    return () => observer.unobserve(el);
  }, [munged, stabilise, mungedContent]);

  return <span ref={ref}>{content}</span>;
};
