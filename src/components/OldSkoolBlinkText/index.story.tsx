import React from 'react';
// import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';

import { OldSkoolBlinkText } from '.';

export default {
  title: 'OldSkoolBlinkText',
};

const template = `
Lorem ipsum dolor sit amet,
consectetur adipiscing elit
`.trim();

export const base = () => {
  const intervalMSec = number('intervalMSec', 800);
  const output = text('output', template);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '4vw' }}>
      <OldSkoolBlinkText intervalMSec={intervalMSec}>{output}</OldSkoolBlinkText>
    </div>
  );
};

export const flexible = () => {
  const intervalMSec = number('intervalMSec', 800);
  const output = text('output', template);
  const maskMSec = number('maskMSec', 300);
  const maskPattern = text('maskPattern', '*-%$X');
  const threshold = number('threshold', 0.2, { range: true, max: 1, min: 0, step: 0.05 });

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '4vw', display: 'flex', flexDirection: 'column' }}>
      <OldSkoolBlinkText
        intervalMSec={intervalMSec}
        maskMSec={maskMSec}
        maskPattern={maskPattern}
        threshold={threshold}
      >
        {output}
      </OldSkoolBlinkText>

      <div style={{ marginTop: '1em', color: '#0f0', background: 'black' }}>
        <OldSkoolBlinkText
          intervalMSec={intervalMSec}
          maskMSec={maskMSec}
          maskPattern={maskPattern}
          threshold={threshold}
        >
          {output}
        </OldSkoolBlinkText>
      </div>
    </div>
  );
};
