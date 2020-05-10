import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { text, number, boolean } from '@storybook/addon-knobs';

import { MungedText, defaultMunges } from '.';

export default {
  title: 'Munge',
};

export const base = () => (
  <>
    <span style={{ fontSize: 30 }}>
      <MungedText munges={[...defaultMunges, { mask: '木朱江エ合云ネ土', pattern: /[会式株社]/ }]} intervalFactor={300}>
        株式会社LegalForce
      </MungedText>
    </span>
    <hr />
    <MungedText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </MungedText>
  </>
);
