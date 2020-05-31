/* eslint-disable react/no-array-index-key, react/jsx-props-no-spreading */

import React, { useMemo } from 'react';

type Props = { width?: number; height?: number; color?: string };

const source = `
kaave
a.k.a.
kyous
uke-a
be-is-
web e
ngine
er------
`
  .trim()
  .split('\n');
export const Typography = ({ width = 600, height = 600 }: Props) => {
  const id = useMemo(() => `gradient-${Math.random().toString().slice(2)}`, []);
  const h = useMemo(() => 100, []);
  const gradient = useMemo(() => [...Array(5).keys()], []);

  return (
    <svg width={width} height={height} fill="transparent" viewBox={`0 0 100 ${h + 6}`}>
      <defs>
        <linearGradient id={id} x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(80,80,80,1)" offset="0%" />
          <stop stopColor="rgba(50,50,50,1)" offset="60%" />
        </linearGradient>
        <desc>kaave a.k.a. kyousuke abe is web engineer</desc>
      </defs>
      <g fontSize={20} fontFamily="'Arial Black', serif" strokeWidth={0.2} role="presentation">
        {source.map((text, j) =>
          gradient.map((i) => (
            <text
              key={`${text} ${i} ${j}`}
              x={0.8 * i ** 1.8}
              y={(h / source.length) * (j + 1) + 3}
              textLength={52}
              // letterSpacing={-1.5}
              // lengthAdjust="spacingAndGlyphs"
              opacity={i !== gradient.length - 1 ? 0.08 * (i + 1) : 1}
              {...(i !== gradient.length - 1 ? { stroke: '#339' } : { fill: `url(#${id})` })}
            >
              {text}
            </text>
          )),
        )}
      </g>
    </svg>
  );
};
