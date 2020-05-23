import React from 'react';
// import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { ConfusedChar } from '.';

export default {
  title: 'ConfusedChar',
};

export const base = () => (
  <>
    <ConfusedChar>{text('children1', 'ピ')}</ConfusedChar>
    <ConfusedChar>{text('children2', 'エ')}</ConfusedChar>
    <ConfusedChar>{text('children3', 'ー')}</ConfusedChar>
    <ConfusedChar>{text('children4', 'ル')}</ConfusedChar>
    <ConfusedChar>{text('children5', '瀧')}</ConfusedChar>
  </>
);
