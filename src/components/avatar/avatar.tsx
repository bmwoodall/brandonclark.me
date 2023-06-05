import * as React from 'react';
import Image from 'next/image';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, forwardedRef) => {
  return <Image src="/images/memoji.png" alt="avatar" width={140} height={140} />;
});
