/* eslint-disable react/no-array-index-key, react/jsx-props-no-spreading */

import React, { useMemo, memo } from 'react';

type Props = {
  width?: number;
  height?: number;
  trackColor?: string;
  trackInterval?: number;
  trackCount?: number;
  fontFamily?: string;
};

const source = `
kyou
suke
abe---
a.k.a.
kaave
is-we
b-engi
neer.
`
  .trim()
  .split('\n');
export const Typography = memo(
  ({
    width = 600,
    height = 600,
    trackColor = '#335',
    trackInterval = 0.8,
    trackCount = 5,
    // fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
    fontFamily = "'Crimson text', serif",
  }: Props) => {
    const id = useMemo(() => `gradient-${Math.random().toString().slice(2)}`, []);
    const h = useMemo(() => 100, []);
    const gradient = useMemo(() => [...Array(trackCount).keys()], [trackCount]);

    return (
      <svg width={width} height={height} fill="transparent" viewBox={`0 0 100 ${h + 1}`}>
        <defs>
          <linearGradient id={id} x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(80, 80, 80, 1)" offset="0%" />
            <stop stopColor="rgba(50, 50, 50, 1)" offset="60%" />
          </linearGradient>
          <desc>kyousuke abe a.k.a. kaave is web engineer</desc>
        </defs>
        <g fontSize={20} fontFamily={fontFamily} fontWeight={700} strokeWidth={0.2} role="presentation">
          {gradient.map((i) => (
            <g
              key={i}
              opacity={i !== gradient.length - 1 ? 0.08 * (i + 1) : 1}
              style={i !== gradient.length - 1 ? { userSelect: 'none' } : {}}
              {...(i !== gradient.length - 1 ? { stroke: trackColor } : { fill: `url(#${id})` })}
            >
              {source.map((text, j) => (
                <text
                  key={`${text} ${j}`}
                  x={trackInterval * i ** 1.8}
                  y={(h / source.length - 3) * (j + 1) + 4}
                  letterSpacing={-2.5}
                >
                  {text}
                </text>
              ))}
              ,
            </g>
          ))}
        </g>
      </svg>
    );
  },
);
