import clsx from 'clsx';

export type FloatingActionButtonProps = JSX.IntrinsicElements['button'] & {
  children?: React.ReactNode;
  className?: string;
};

export const FloatingActionButton = ({
  children,
  className: customClassnames,
  ...buttonProps
}: FloatingActionButtonProps) => {
  const size = 32;
  const dimensions = `h-${size} min-w-${size} `;
  const shape =
    'bg-white rounded-3xl shadow-button-shadow font-bold text-text-color';
  const spacing = 'p-2 flex flex-row justify-center items-center gap-1.5';

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        className={clsx(shape, dimensions, spacing, customClassnames)}
        {...buttonProps}
      >
        {children}
      </button>
    </div>
  );
};
