import React, { memo } from 'react';

type Props = {
  headline: string;
  description: string;
  color?: string;
  hidden?: boolean;
};

// eslint-disable-next-line prettier/prettier
export const LFVideoHeader = memo(({ headline, description, color="#000", hidden = false }: Props) => {
  return (
    <div className="LFVideoHeader" aria-hidden={hidden} style={{ color }}>
      <span className="LFVideoHeader__headline">
        <span className="LFVideoHeader__headline-text">{headline}</span>
      </span>
      <span className="LFVideoHeader__desc">
        <span className="LFVideoHeader__desc-text">{description}</span>
      </span>
    </div>
  );
});
