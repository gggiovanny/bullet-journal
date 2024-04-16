import { tabs } from '../constants/navData';
import BookmarkTab from './BookmarkTab';

type Props = JSX.IntrinsicElements['nav'] & {
  activeTabName: string;
  onClickTab: (name: string) => void;
};

export default function BookmarkNav({
  activeTabName,
  onClickTab,
  ...navProps
}: Props) {
  const createClickHandler = (name: string) => () => {
    onClickTab(name);
  };

  return (
    <nav {...navProps}>
      <ul className="flex flex-col font-title text-sm font-normal text-text-color">
        {tabs.map(({ text, color, name }, index) => {
          return (
            <BookmarkTab
              key={index}
              color={color}
              zIndex={tabs.length - index}
              isActive={name === activeTabName}
              onClick={createClickHandler(name)}
            >
              {text}
            </BookmarkTab>
          );
        })}
      </ul>
    </nav>
  );
}
