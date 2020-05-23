import React from 'react';
// import { action } from '@storybook/addon-actions';
import { text, number, boolean } from '@storybook/addon-knobs';

import { RadiationHeader } from '.';

export default {
  title: 'RadiationHeader',
};

export const base = () => (
  <RadiationHeader
    rowCount={number('rowCount', 3)}
    fontSize={{ value: number('fontSize', 20) }}
    hidden={boolean('hidden', true)}
  >
    {text('children', '株式会社LegalForce')}
  </RadiationHeader>
);
