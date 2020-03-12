import 'regenerator-runtime';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Test } from '.';

describe('components', () => {
  describe('test', () => {
    it('テストのテスト', () => {
      const msg = 'Ahhhhhhhh!';
      render(<Test appendMessage={msg} />);
      expect(screen.queryByText(`OFF${msg}`)).toBeInTheDocument();
    });
  });
});
