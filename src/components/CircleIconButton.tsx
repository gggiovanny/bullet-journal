import { cn } from '@/lib/utils';

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  children?: React.ReactNode;
  className?: string;
};

export const CircleIconButton = ({
  children,
  className: customClassnames,
  ...buttonProps
}: ButtonProps) => {
  const classNames = cn(
    'h-[60px] w-[60px] rounded-[50%] flex justify-center items-center',
    customClassnames
  );

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  );
};
