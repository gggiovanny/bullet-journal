import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex pt-1 h-7 w-full font-typewriter text-deep-blue text-sm bg-white px-3 ring-offset-white placeholder:text-creamy-melon placeholder:font-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melon disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
