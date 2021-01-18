import React from 'react';
import { text } from '@storybook/addon-knobs';

import { ConfusedChar } from '.';

export default {
  title: 'ConfusedChar',
};

export const base = () => (
  <>
    <ConfusedChar intervalMSec={50} confuseCount={30}>
      {text('children1', 'ピ')}
    </ConfusedChar>
    <ConfusedChar intervalMSec={200} confuseCount={10}>
      {text('children2', 'エ')}
    </ConfusedChar>
    <ConfusedChar intervalMSec={300} confuseCount={4}>
      {text('children3', 'ー')}
    </ConfusedChar>
    <ConfusedChar intervalMSec={75} confuseCount={20}>
      {text('children4', 'ル')}
    </ConfusedChar>
    <ConfusedChar intervalMSec={150} confuseCount={12}>
      {text('children5', '瀧')}
    </ConfusedChar>
  </>
);
