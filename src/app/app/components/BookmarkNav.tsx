import { TiHomeOutline } from 'react-icons/ti';

import BookmarkTab from './BookmarkTab';

const bookmarks = [
  { text: <TiHomeOutline />, color: '#C6CAE9' },
  { text: 'personal', color: '#C6F0EE' },
  { text: 'por mes', color: '#CAF1BC' },
  { text: 'año en pixeles', color: '#F2D4B1' },
  { text: 'listas', color: '#F2B1B1' },
  { text: 'creativo', color: '#FBCAE1' },
];

type Props = {};

export default function BookmarkNav({}: Props) {
  return (
    <nav>
      <ul className="flex flex-col font-title text-sm font-normal text-text-color">
        {bookmarks.map(({ text, color }, index) => (
          <BookmarkTab
            key={index}
            color={color}
            zIndex={bookmarks.length - index}
            isActive={index === 0}
          >
            {text}
          </BookmarkTab>
        ))}
      </ul>
    </nav>
  );
}
