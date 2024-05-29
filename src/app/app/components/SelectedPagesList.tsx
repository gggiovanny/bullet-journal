import React from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { IoTrashOutline } from 'react-icons/io5';

import { Page } from '@/supabase/models/useJournalPages';

import { categoryTabs } from '../constants/pageCategories';
import { EmptyState } from './EmptyState';

type Props = {
  selectedPages: string[];
  allPages: Page[];
  handleUnselect: (id: string) => void;
};

type PagesByCategory = {
  [key: string]: Page[];
};

export default function SelectedPagesList({
  selectedPages,
  allPages,
  handleUnselect,
}: Props) {
  if (selectedPages.length === 0) return <EmptyState />;

  const selectedPagesByCategory = selectedPages.reduce(
    (acc, selectedPageId) => {
      const selectedPage = allPages.find(
        page => page.app_id === selectedPageId
      ) as Page;

      return {
        ...acc,
        [selectedPage.category]: [
          ...(acc[selectedPage.category] || []),
          selectedPage,
        ],
      };
    },
    {} as PagesByCategory
  );

  return (
    <div className="flex flex-col gap-3 mx-6">
      {Object.entries(selectedPagesByCategory).map(
        ([categoryId, categoryPages]) => {
          const categoryData = categoryTabs.find(tab => tab.id === categoryId);
          return (
            <div
              key={categoryId}
              className="py-3 px-4 rounded-lg"
              style={{ backgroundColor: categoryData?.color }}
            >
              <h2 className="text-2xl font-bold mb-2 text-text-color opacity-10">
                {categoryData?.nodeContent}
              </h2>
              <ul>
                {categoryPages.map(page => (
                  <li
                    key={page.app_id}
                    className="text-text-color ml-3 flex gap-2 items-center text-sm"
                  >
                    <BsBookmarkCheckFill />
                    <span>{page.name}</span>
                    <IoTrashOutline
                      className="opacity-20 hover:opacity-50"
                      onClick={() => handleUnselect(page.app_id)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      )}
    </div>
  );
}
