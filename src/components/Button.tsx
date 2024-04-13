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
    'bg-white text-text-color h-[30px] flex flex-row justify-center items-center gap-[6px] p-[16px] rounded-[18.5px] shadow-button-shadow font-bold',
    customClassnames
  );

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  );
};
