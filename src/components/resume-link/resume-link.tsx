import * as React from 'react';
import { ExternalLink } from 'react-feather';
import Link, { LinkProps } from 'next/link';

export interface ResumeLinkProps extends Omit<LinkProps, 'href'> {}

export const ResumeLink = React.forwardRef<HTMLAnchorElement, ResumeLinkProps>(
  (props, forwardedRef) => {
    return (
      <Link {...props} className="flex items-center" href="/resume.pdf" ref={forwardedRef}>
        View my resume <ExternalLink className="ml-2" size={16} />
      </Link>
    );
  },
);
