import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import '../src/style.scss';

// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(withKnobs());
addParameters({
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ],
  },
});
