import React from 'react';
import { cx } from '../../utils/cx';

type Props = {
  rowCount: number;
  fontSize: {
    value: number;
    unit?: 'px' | 'em' | 'vw';
  };
  children: string;
  hidden?: boolean;
};

export const AnimationHeader = ({ rowCount, fontSize, children, hidden = false }: Props) => {
  const chars = React.useMemo(
    () =>
      children
        .padEnd(children.length + (rowCount - (children.length % rowCount)), ' ')
        .split('')
        .reduce<string[][]>((acc, c, i) => {
          const lineNumber = Math.floor(i / rowCount);
          acc[lineNumber] = [...(acc[lineNumber] || []), c];
          return acc;
        }, []),
    [rowCount, children],
  );

  return (
    <span
      className={cx('AnimationHeader', hidden && '-visually-hidden')}
      aria-label={children}
      style={{ fontSize: `${fontSize.value}${fontSize.unit ?? 'px'}` }}
    >
      {chars.map((row) => (
        <span className="AnimationHeader__row" role="presentation">
          {row.map((c) => (
            <span className="AnimationHeader__char" dangerouslySetInnerHTML={{ __html: c !== ' ' ? c : '&nbsp;' }} />
          ))}
        </span>
      ))}
    </span>
  );
};
