import React from 'react';
// import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import { SmashBros } from '.';

export default {
  title: 'SmashBros',
};

export const base = () => (
  <SmashBros hidden={boolean('hidden', true)}>
    <img src="https://placekitten.com/1280/720" alt="" />
  </SmashBros>
);
