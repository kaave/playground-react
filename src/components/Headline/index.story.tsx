import React from 'react';
// import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { Headline } from '.';

export default {
  title: 'Headline',
};

export const base = () => (
  <>
    <Headline>{text('children', '株式会社LegalForce')}</Headline>
  </>
);
