import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { RippleButton } from '.';

export default {
  title: 'RippleButton',
};

export const base = () => <RippleButton onClick={action('Test')}>{text('message', '😭😇🤪😊🤔')}</RippleButton>;
