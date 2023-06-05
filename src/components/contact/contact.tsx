import * as React from 'react';
import { GitHub, Linkedin, Mail } from 'react-feather';

export interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Contact = React.forwardRef<HTMLDivElement, ContactProps>((props, forwardedRef) => {
  return (
    <div className="flex items-center gap-8" ref={forwardedRef} {...props}>
      <div className="flex items-center justify-center">
        <a
          href="mailto:yhbrandon@me.com"
          className="text-slate-900 hover:text-violet-500 dark:text-slate-100 dark:hover:text-violet-500"
        >
          <Mail />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/yhbrandon/"
          target="_blank"
          className="text-slate-900 hover:text-violet-500 dark:text-slate-100 dark:hover:text-violet-500"
        >
          <Linkedin />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          className="text-slate-900 hover:text-violet-500 dark:text-slate-100 dark:hover:text-violet-500"
          href="https://github.com/branclar"
          target="_blank"
        >
          <GitHub />
        </a>
      </div>
    </div>
  );
});
