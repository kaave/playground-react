/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fill?: string;
  horizontalSplitPoint?: number;
  verticalSplitPoint?: number;
  hidden?: boolean;
};

export const SmashBros = memo(
  ({
    fill: background = '#000',
    horizontalSplitPoint = 28,
    verticalSplitPoint = 65,
    hidden = false,
    children,
  }: Props) => {
    return (
      <div className="SmashBros" style={{ position: 'relative' }} aria-hidden={hidden}>
        {children}
        <div className="SmashBros__wrapper-container">
          <span
            className="SmashBros__wrapper"
            style={{
              background,
              width: `${horizontalSplitPoint}%`,
              height: `${verticalSplitPoint}%`,
            }}
          />
          <span
            className="SmashBros__wrapper"
            style={{
              background,
              left: `${horizontalSplitPoint}%`,
              width: `${100 - horizontalSplitPoint}%`,
              height: `${verticalSplitPoint}%`,
            }}
          />
          <span
            className="SmashBros__wrapper"
            style={{
              background,
              top: `${verticalSplitPoint}%`,
              width: `${horizontalSplitPoint}%`,
              height: `${100 - verticalSplitPoint}%`,
            }}
          />
          <span
            className="SmashBros__wrapper"
            style={{
              background,
              left: `${horizontalSplitPoint}%`,
              top: `${verticalSplitPoint}%`,
              width: `${100 - horizontalSplitPoint}%`,
              height: `${100 - verticalSplitPoint}%`,
            }}
          />
          <span className="SmashBros__wrapper-line" style={{ left: `${horizontalSplitPoint}%` }} />
          <span className="SmashBros__wrapper-line" style={{ top: `${verticalSplitPoint}%` }} />
        </div>
      </div>
    );
  },
);
