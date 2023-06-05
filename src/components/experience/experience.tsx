import * as React from 'react';
import Image from 'next/image';

export interface ExperienceProps extends React.HTMLAttributes<HTMLDivElement> {
  company: string;
  description: string;
  image: string;
  tags: string[];
  title: string;
}

export const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
  (props, forwardedRef) => {
    const { company, description, image, tags, title, ...other } = props;

    const imageUrl = `/images/${image}`;

    return (
      <div className="flex flex-col gap-2" ref={forwardedRef} {...other}>
        <div className="h-48 rounded-xl overflow-hidden mb-4 ring-1 bg-gray-50 ring-zinc-900/10 dark:ring-white/20">
          <Image
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={company}
            width={500}
            height={192}
          />
        </div>
        <h3 className="text-base leading-6 font-semibold">
          {title} - {company}
        </h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-clip-padding bg-zinc-900/5 dark:bg-white/10 border border-zinc-900/10 dark:border-white/20">
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  },
);
