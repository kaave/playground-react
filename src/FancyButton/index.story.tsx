import React from 'react';
import { action } from '@storybook/addon-actions';

import { FancyButton } from '.';

export default {
  title: 'FancyButton',
};

export const base = () => <FancyButton onClick={action('Test')} />;
