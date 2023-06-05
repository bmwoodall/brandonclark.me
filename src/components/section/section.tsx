import * as React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>((props, forwardedRef) => {
  const { children, title, ...other } = props;

  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      ref={forwardedRef}
      {...other}
    >
      {title && <h2 className="text-lg leading-8 font-semibold my-8">{title}</h2>}
      {children}
    </section>
  );
});
