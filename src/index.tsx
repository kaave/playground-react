import React from 'react';

import { wait } from './wait';

type Props = {
  appendMessage?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Test = ({ appendMessage, onClick }: Props) => {
  const [toggle, setToggle] = React.useState(false);
  const handleClick = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async e => {
      await wait(1000);
      setToggle(b => !b);
      onClick?.(e);
    },
    [onClick],
  );

  return (
    <button type="button" onClick={handleClick}>
      {toggle ? 'ON' : 'OFF'}
      {appendMessage}
    </button>
  );
};
