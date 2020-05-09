import React, { useState, useCallback, MouseEventHandler, useMemo } from 'react';
import { cx } from '../utils/cx';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const GADGETS_COUNT = 5;

export const FancyButton = ({ onClick }: Props) => {
  const [active, setActive] = useState(false);
  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      setActive(true);
      onClick?.(e);
      window.setTimeout(() => setActive(false), 1000);
    },
    [onClick],
  );
  const rootClassName = useMemo(() => cx('FancyButton', active && '-active'), [active]);

  return (
    <div className={rootClassName}>
      <button type="button" className="FancyButton__button" onClick={!active ? handleClick : undefined}>
        <span className="FancyButton__ripple" role="presentation" />
        <span className="FancyButton__ripple" role="presentation" />
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <span className="FancyButton__inner -animation" role="presentation">
          👺
        </span>
        <span className="FancyButton__inner" role="img" aria-label="favorite">
          😍
        </span>
      </button>
      {[...Array(GADGETS_COUNT).keys()].map((i) => (
        <span key={i} className="FancyButton__gadgets-container" role="presentation">
          <span className="FancyButton__gadgets" role="presentation">
            <span className="FancyButton__gadget">■</span>
            {/* <span className="FancyButton__gadget">●</span> */}
            <span className="FancyButton__gadget">▲</span>
          </span>
        </span>
      ))}
    </div>
  );
};
