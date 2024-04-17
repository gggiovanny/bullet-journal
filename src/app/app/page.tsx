'use client';

import { useState } from 'react';
import { PiHandSoap, PiHeart } from 'react-icons/pi';

import BigIconCheckbox from './components/BigIconCheckbox';
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
      {activeTabName === 'home' && <EmptyState />}
      {activeTabName !== 'home' && (
        <div className="m-3 flex gap-4">
          <BigIconCheckbox text="sobre mi" Icon={PiHeart} />
          <BigIconCheckbox text="rutina de skin care" Icon={PiHandSoap} />
        </div>
      )}
    </CategoryLayout>
  );
}
