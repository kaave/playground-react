import 'regenerator-runtime';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { RippleButton } from '.';

describe('components', () => {
  describe('RippleButton', () => {
    it('テストのテスト', () => {
      const msg = 'Ahhhhhhhh!';
      render(<RippleButton>{msg}</RippleButton>);
      expect(screen.queryByText(msg)).toBeInTheDocument();
    });
  });
});
