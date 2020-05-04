/* eslint-disable react/no-array-index-key */

import React, { useRef, useCallback, useState, useMemo } from 'react';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const BACKGROUND_TRANSITION_MSEC = 800;

type Props = {
  children: string;
  background?: string;
  color?: string;
  fontSize?: string;
};

export const BbcHeadline = ({ children: text, background = '#000', color = '#fff', fontSize = '30px' }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const handleIntersection = useCallback(() => setVisible(true), []);
  const chars = useMemo(() => text.split(''), [text]);
  useIntersectionObserver(ref, handleIntersection);

  return (
    <span ref={ref} className="BbcHeadline" hidden={!visible || undefined}>
      <span className="BbcHeadline__background" role="presentation" style={{ background }} />
      <span className="BbcHeadline__inner" aria-label={text} style={{ color, fontSize }}>
        {chars.map((c, i) => (
          <span
            key={i}
            className="BbcHeadline__char"
            style={{ transitionDelay: `${BACKGROUND_TRANSITION_MSEC + i * 20}ms` }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: c === ' ' ? '&nbsp;' : c }}
          />
        ))}
      </span>
    </span>
  );
};
