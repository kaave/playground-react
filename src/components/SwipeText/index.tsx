/* eslint-disable react/no-array-index-key, react/jsx-props-no-spreading, @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call */

import React, { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  children: string;
  width?: string | number;
};

export const SwipeText = ({ children: current, width = '100%' }: Props) => {
  const exitRef = useRef<string>('');
  const enterRef = useRef<string>(current);
  const currentRef = useRef<string>(current);
  const [status, setStatus] = useState<'stable' | 'pre-exit' | 'exit' | 'pre-enter'>('stable');

  const handleExit = useCallback(() => {
    exitRef.current = '';
    enterRef.current = currentRef.current;
    setStatus('pre-enter');
    // requestAnimationFrame(() => setStatus('stable'));
    setTimeout(() => setStatus('stable'), 50);
  }, []);

  useEffect(() => {
    enterRef.current = '';
    exitRef.current = currentRef.current;
    currentRef.current = current;
    setStatus('pre-exit');

    // requestAnimationFrame(() => setStatus('exit'));
    setTimeout(() => setStatus('exit'), 50);
  }, [current]);

  return (
    <span className={`SwipeText -${status}`} aria-label={current} style={{ width }}>
      {exitRef.current ? (
        <span className="SwipeText__exit" role="presentation" onTransitionEnd={handleExit}>
          {exitRef.current}
        </span>
      ) : null}
      {enterRef.current ? <span className="SwipeText__current">{enterRef.current}</span> : null}
    </span>
  );
};
