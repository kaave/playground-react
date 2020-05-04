import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { RippleButton } from './RippleButton';

export default {
  title: 'RippleButton',
};

export const hello = () => <RippleButton onClick={action('Test')}>{text('message', '😭😇🤪😊🤔')}</RippleButton>;
