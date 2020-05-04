import React, { useState, useCallback, MouseEventHandler, useMemo } from 'react';
import { cx } from './utils/cx';

type Props = {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CLASSNAME_PREFIX = 'MyButtonComponent';
const styles = {
  root: CLASSNAME_PREFIX,
  button: `${CLASSNAME_PREFIX}__button`,
  buttonBackground: `${CLASSNAME_PREFIX}__button-background`,
  buttonInner: `${CLASSNAME_PREFIX}__button-inner`,
} as const;

export const RippleButton = ({ children, onClick }: Props) => {
  const [active, setActive] = useState(false);
  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      setActive(true);
      onClick?.(e);
      window.setTimeout(() => setActive(false), 1000);
    },
    [onClick],
  );
  const rootClassName = useMemo(() => cx(styles.root, active && '-active'), [active]);

  return (
    <div className={rootClassName}>
      <button type="button" className={styles.button} onClick={!active ? handleClick : undefined}>
        <span className={styles.buttonBackground} role="presentation" />
        <span className={styles.buttonInner}>{children}</span>
      </button>
    </div>
  );
};
