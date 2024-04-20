'use client';

import { useState } from 'react';

import usePagesByCategory from '@/supabase/models/usePagesByCategory';

import BigIconCheckbox from './components/BigIconCheckbox';
import BookmarkNav from './components/BookmarkNav';
import CategoryLayout from './components/CategoryLayout';
import { EmptyState } from './components/EmptyState';
import { iconsByPageId } from './constants/iconsByPageName';
import { tabs } from './constants/navData';

export default function PageRoot() {
  const [activeTabName, setActiveTabName] = useState('');
  const { pages, isLoading } = usePagesByCategory(activeTabName);

  const activeTab = tabs.find(tab => tab.name === activeTabName) || tabs[0];

  return (
    <CategoryLayout
      backgroundColor={activeTab.backgroundColor || activeTab.color}
      aside={
        <BookmarkNav
          className="mt-4"
          activeTabName={activeTabName}
          onClickTab={setActiveTabName}
        />
      }
    >
      <h1
        className="font-title font-extrabold opacity-50"
        style={{
          color: activeTab.titleColor,
          fontSize: activeTab.fontSize,
          margin: activeTab.margins,
          transition: 'color 0.1s ease-in-out',
        }}
      >
        {activeTab.title || activeTab.text}
      </h1>
      {activeTabName === 'home' && <EmptyState />}
      {activeTabName !== 'home' && (
        <div className="flex flex-row justify-center ml-4 mr-4">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {isLoading && 'Loading...'}
            {pages &&
              pages.map(({ app_id, name }) => {
                const Icon = iconsByPageId[app_id];
                return <BigIconCheckbox key={app_id} text={name} Icon={Icon} />;
              })}
          </div>
        </div>
      )}
    </CategoryLayout>
  );
}
