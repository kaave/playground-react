import React from 'react';
// import { action } from '@storybook/addon-actions';
import { boolean, text, color } from '@storybook/addon-knobs';

import { LFVideoHeader } from '.';

export default {
  title: 'LFVideoHeader',
};

export const base = () => (
  <div style={wrapperStyle}>
    <LFVideoHeader
      headline={text('headline', '2次試験に寝坊する')}
      description={text('description', '起きれば合格とはうまいこといったもの')}
      color={color('color', '#222')}
      hidden={boolean('hidden', true)}
    />
  </div>
);

const wrapperStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
} as const;
