'use client';

import { useState } from 'react';

import BookmarkNav from './components/BookmarkNav';
import CategoryLayout from './components/CategoryLayout';
import { EmptyState } from './components/EmptyState';
import { tabs } from './constants/navData';

export default function PageRoot() {
  const [activeTabName, setActiveTabName] = useState('');
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
      <div className="text-center font-italic italic text-text-color-alt font-normal h-full text-sm">
        {activeTabName === 'home' && <EmptyState />}
      </div>
    </CategoryLayout>
  );
}
