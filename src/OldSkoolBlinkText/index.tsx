/* eslint-disable no-shadow, no-return-assign, react/no-array-index-key */

import React, { useMemo, useState, useEffect } from 'react';

type Props = {
  intervalMSec: number;
  children: string;
  maskMSec?: number;
  maskPattern?: string;
  threshold?: number;
};

const escapePattern: Record<string, string> = {
  '"': '&quot;',
  '&': '&amp;',
  ' ': '&nbsp;',
  '<': '&lt;',
  '>': '&gt;',
};

export const OldSkoolBlinkText = ({
  intervalMSec,
  children: raw,
  maskMSec = intervalMSec / 5,
  maskPattern = '-',
  threshold = 0,
}: Props) => {
  const [masked, setMasked] = useState(false);
  const masks = useMemo(() => maskPattern.split(''), [maskPattern]);
  const rawChars = useMemo(() => raw.split('\n').map((s) => s.split('')), [raw]);
  const [output, setOutput] = useState(rawChars);

  useEffect(() => {
    let intervalId: number | undefined;
    const fn = () =>
      (intervalId = window.setTimeout(
        () => {
          setOutput(
            masked
              ? rawChars.map((s) =>
                  s.map((c) =>
                    threshold >= 1 || c === ' ' || (threshold > 0 && Math.random() <= threshold)
                      ? c
                      : masks[Math.floor(Math.random() * masks.length)],
                  ),
                )
              : rawChars,
          );
          setMasked((b) => !b);
        },
        masked ? intervalMSec - maskMSec : maskMSec,
      ));
    fn();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalMSec, masked, masks, maskMSec, rawChars, threshold]);

  return (
    <span className="OldSkoolBlinkText" aria-label={raw}>
      {output.map((row, i) => (
        <span key={i} className="OldSkoolBlinkText__row" role="presentation">
          {row.map((c, j) => (
            <span
              key={`${c}${j}`}
              className="OldSkoolBlinkText__char"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: escapePattern[c] ?? c }}
            />
          ))}
        </span>
      ))}
    </span>
  );
};
