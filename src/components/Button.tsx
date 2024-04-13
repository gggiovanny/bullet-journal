import clsx from 'clsx';

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  children?: React.ReactNode;
  className?: string;
};

export const Button = ({
  children,
  className: customClassnames,
  ...buttonProps
}: ButtonProps) => {
  const classNames = clsx(
    'bg-white text-text-color h-8 flex flex-row justify-center items-center gap-1.5 p-4 rounded-2xl shadow-button-shadow font-bold',
    customClassnames
  );

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  );
};
