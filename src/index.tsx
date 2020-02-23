import React from 'react';

import { wait } from './wait';

type Props = {
  appendMessage?: string;
};

export const Test = ({ appendMessage }: Props) => {
  const [toggle, setToggle] = React.useState(false);
  const handleClick = React.useCallback(async () => {
    await wait(1000);
    setToggle(b => !b);
  }, []);

  return (
    <button type="button" onClick={handleClick}>
      {toggle ? 'ON' : 'OFF'}
      {appendMessage}
    </button>
  );
};
