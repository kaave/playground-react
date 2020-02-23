import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '1em',
          fontSize: 20,
          display: 'inline',
        },
        body: {
          padding: '0 1em',
        },
        h2: {
          display: 'inline',
          color: '#ddd',
        },
      },
      infoBody: {
        padding: '0 5px',
        lineHeight: '2',
      },
    },
    inline: false,
    source: true,
  }),
);

addDecorator(withKnobs());
addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.tsx?$/), module);
configure(require.context('../src', true, /\.stor(ies|y)\.[jt]sx?$/), module);
