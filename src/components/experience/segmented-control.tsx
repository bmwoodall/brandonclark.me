import clsx from 'clsx';
import * as React from 'react';

export interface SegmentedControlProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export const SegmentedControl = React.forwardRef<HTMLUListElement, SegmentedControlProps>(
  (props, ref) => {
    const { children, ...other } = props;

    const className = clsx(
      'inline-flex w-full p-1 space-x-1',
      'rounded-full bg-clip-padding bg-zinc-900/5 dark:bg-white/10 border border-zinc-900/10 dark:border-white/20',
    );

    return (
      <ul className={className} ref={ref} {...other}>
        {children}
      </ul>
    );
  },
);
