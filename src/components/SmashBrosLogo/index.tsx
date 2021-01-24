/* eslint-disable react/no-array-index-key, react/jsx-props-no-spreading */

import React, { memo, useMemo } from 'react';

type Props = {
  children: string;
  hidden?: boolean;
};

export const SmashBrosLogo = memo(({ children, hidden = false }: Props) => {
  const texts = useMemo(() => children.split('\n').map((row) => row.split('')), [children]);

  return (
    <div className="SmashBrosLogo" aria-hidden={hidden} aria-label={children}>
      {texts.map((row, i) => (
        <span key={i} className="SmashBrosLogo__row" role="presentation">
          {row.map((c, j) => (
            <span key={j} className="SmashBrosLogo__cell">
              <span className="SmashBrosLogo__text">{c}</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  );
});
