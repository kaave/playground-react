/* eslint-disable react-hooks/rules-of-hooks */

// import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';
import { SwipeText } from '.';

export default {
  title: 'SwipeText',
};

export const base = () => {
  const [text, setText] = useState('Hello');

  useEffect(() => {
    const timerId = window.setInterval(() => setText((prev) => (prev === 'Hello' ? 'World' : 'Hello')), 3000);

    return () => window.clearInterval(timerId);
  }, []);

  return <SwipeText width={300}>{text}</SwipeText>;
};
