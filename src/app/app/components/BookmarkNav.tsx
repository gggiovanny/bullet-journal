import { categoryTabs } from '../constants/pageCategories';
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
        {categoryTabs.map(({ nodeContent: text, color, id: name }, index) => {
          return (
            <BookmarkTab
              key={index}
              color={color}
              zIndex={categoryTabs.length - index}
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
