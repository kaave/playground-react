import React from 'react';
// import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import { SmashBrosLogo } from '.';

export default {
  title: 'SmashBrosLogo',
};

export const base = () => <SmashBrosLogo hidden={boolean('hidden', true)}>{`株式会社\nLegalForce`}</SmashBrosLogo>;
