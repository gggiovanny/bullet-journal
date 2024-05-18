import React from 'react';

import { Page } from '@/supabase/models/useJournalPages';

import { EmptyState } from './EmptyState';

type Props = {
  selectedPages: string[];
  pages: Page[];
};

type PagesByCategory = {
  [key: string]: Page[];
};

export default function SelectedPagesList({ selectedPages, pages }: Props) {
  if (selectedPages.length === 0) return <EmptyState />;

  const selectedPagesByCategory = selectedPages.reduce(
    (acc, selectedPageId) => {
      const selectedPage = pages.find(
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
    <div>
      <pre>{JSON.stringify(selectedPagesByCategory, null, 2)}</pre>
    </div>
  );
}
