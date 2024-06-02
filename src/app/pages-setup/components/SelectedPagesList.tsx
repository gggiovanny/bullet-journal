import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { IoTrashOutline } from 'react-icons/io5';

import { Button } from '@/components/Button';
import { Page, UserPagesModel } from '@/supabase';

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
  const router = useRouter();
  const [isCreationLoading, setIsCreationLoading] = useState(false);

  if (selectedPages.length === 0) return <EmptyState />;

  const CreationIcon = isCreationLoading ? ImSpinner8 : FaPlus;

  const selectedPagesByCategory = selectedPages.reduce(
    (acc, selectedPageId) => {
      const selectedPage = allPages.find(
        page => page.id === selectedPageId
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

  function handlePagesCreation() {
    setIsCreationLoading(true);
    const userPages = new UserPagesModel();
    userPages
      .create(selectedPages)
      .then(() => {
        router.push('/pages/1');
      })
      .finally(() => {
        setIsCreationLoading(false);
      });
  }

  return (
    <div className="flex flex-col gap-3 mx-6 justify-start h-full">
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
                      onClick={() => handleUnselect(page.id)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      )}

      <Button
        className="text-deep-blue mt-auto mb-2"
        onClick={handlePagesCreation}
      >
        <CreationIcon
          className={clsx('text-melon', {
            'animate-spin': isCreationLoading,
          })}
        />
        crear
      </Button>
    </div>
  );
}
