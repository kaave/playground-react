/* eslint-disable react/no-array-index-key */

import React, { useRef, useCallback, useState, useMemo } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ConfusedChar } from '../ConfusedChar';

type Props = {
  children: string;
};

export const Headline = ({ children: text }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const charList = useMemo(() => text.split(''), [text]);
  // TODO: 表示と同時にアニメーションがスタートするようにする
  const [visibleCount /* setVisibleCount */] = useState(0);
  const handleIntersection = useCallback(() => setVisible(true), []);
  useIntersectionObserver(ref, handleIntersection);

  return (
    <span ref={ref} className="Headline" hidden={!visible || undefined}>
      <span className="Headline__text" aria-label={text}>
        {charList.map((c, i) => (
          <span key={`${c} ${i}`}>
            <ConfusedChar aria-hidden={visibleCount >= i}>{c}</ConfusedChar>
          </span>
        ))}
      </span>
    </span>
  );
};
