import React from 'react';
// import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { BbcHeadline } from '.';

export default {
  title: 'BbcHeadline',
};

export const def = () => <BbcHeadline>{text('children', 'You aint gonna need it')}</BbcHeadline>;
