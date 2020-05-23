import React from 'react';
// import { action } from '@storybook/addon-actions';
import { text, number, boolean } from '@storybook/addon-knobs';

import { AnimationHeaderSecond } from '.';

export default {
  title: 'AnimationHeaderSecond',
};

export const base = () => (
  <AnimationHeaderSecond
    rowCount={number('rowCount', 5)}
    fontSize={{ value: number('fontSize', 40) }}
    hidden={boolean('hidden', true)}
  >
    {text('children', '株式会社 LegalForce')}
  </AnimationHeaderSecond>
);
