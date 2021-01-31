/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Aura = memo(({ children }: Props) => (
  <span className="Aura">
    <span className="Aura__effect" role="presentation">
      {children}
    </span>
    <span className="Aura__inner">{children}</span>
  </span>
));
