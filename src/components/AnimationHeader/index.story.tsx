import React from 'react';
// import { action } from '@storybook/addon-actions';
import { text, number, boolean } from '@storybook/addon-knobs';

import { AnimationHeader } from '.';

export default {
  title: 'AnimationHeader',
};

export const base = () => (
  <AnimationHeader
    rowCount={number('rowCount', 5)}
    fontSize={{ value: number('fontSize', 20) }}
    hidden={boolean('hidden', true)}
  >
    {text('children', '株式会社 LegalForce')}
  </AnimationHeader>
);
