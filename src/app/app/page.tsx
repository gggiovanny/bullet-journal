'use client';

import { useState } from 'react';

import usePagesByCategory from '@/supabase/models/usePagesByCategory';

import BigIconCheckbox from './components/BigIconCheckbox';
import BookmarkNav from './components/BookmarkNav';
import CategoryLayout from './components/CategoryLayout';
import { EmptyState } from './components/EmptyState';
import { iconsByPageName } from './constants/iconsByPageName';
import { tabs } from './constants/navData';

export default function PageRoot() {
  const [activeTabName, setActiveTabName] = useState('');
  const activeTab = tabs.find(tab => tab.name === activeTabName) || tabs[0];

  const { pages, isLoading } = usePagesByCategory(activeTabName);

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
        <div className="mx-8 flex flew-row flex-wrap gap-3">
          {isLoading && 'Loading...'}
          {pages &&
            pages.map(({ id, name }) => {
              const Icon = iconsByPageName[name];
              return (
                <BigIconCheckbox
                  key={id}
                  text="rutina de skin care"
                  Icon={Icon}
                />
              );
            })}
        </div>
      )}
    </CategoryLayout>
  );
}
