import clsx from 'clsx';

type Props = {
  color: string;
  children: React.ReactNode;
  zIndex?: number;
  isActive?: boolean;
  onClick?: VoidFunction;
};

export default function BookmarkTab({
  children,
  color,
  zIndex = 0,
  isActive,
  onClick,
}: Props) {
  return (
    <li
      className={clsx(
        'shadow-button-shadow rounded-l-2xl ml-auto pt-5 pb-5 pl-2 pr-3 min-w-10',
        {
          'pr-6': isActive,
        }
      )}
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        backgroundColor: color,
        zIndex: isActive ? zIndex + 1 : zIndex,
        transition: 'padding 0.1s ease-in-out',
      }}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
