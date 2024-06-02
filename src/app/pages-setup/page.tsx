'use client';

import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

import { FloatingActionButton } from '@/components/FloatingActionButton';
import { FullPageLoading } from '@/components/FullPageLoading';
import { useJournalPages } from '@/supabase';

import BigIconCheckbox from './components/BigIconCheckbox';
import BookmarkNav from './components/BookmarkNav';
import CategoryLayout from './components/CategoryLayout';
import SelectedPagesList from './components/SelectedPagesList';
import { iconsByPageId } from './constants/iconsByPageName';
import { categoryTabs } from './constants/pageCategories';

const HOME_PAGE_NAME = 'home';

export default function PageRoot() {
  const [activeTabName, setActiveTabName] = useState(HOME_PAGE_NAME);
  const { pages, isLoading: isLoadingPages } = useJournalPages();

  const categoryPages = pages.filter(page => page.category === activeTabName);

  const activeTab =
    categoryTabs.find(tab => tab.id === activeTabName) || categoryTabs[0];

  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const handleIconCheck = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedPages([...selectedPages, id]);
    } else {
      setSelectedPages(selectedPages.filter(item => item !== id));
    }
  };

  const handleUnselect = (id: string) => {
    setSelectedPages(selectedPages.filter(item => item !== id));
  };

  const handleGoHome = () => {
    setActiveTabName(HOME_PAGE_NAME);
  };

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
        {activeTab.title}
      </h1>
      {activeTabName !== HOME_PAGE_NAME && (
        <>
          {isLoadingPages && <FullPageLoading />}
          {categoryPages && (
            <div className="flex flex-row justify-center ml-4 mr-4">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {categoryPages.map(({ id, app_id, name }) => {
                  const Icon = iconsByPageId[app_id];
                  return (
                    <BigIconCheckbox
                      key={id}
                      id={id}
                      text={name}
                      Icon={Icon}
                      handleChange={handleIconCheck}
                      initialChecked={selectedPages.includes(id)}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <FloatingActionButton onClick={handleGoHome}>
            <FaEye size={20} />
          </FloatingActionButton>
        </>
      )}
      {activeTabName === HOME_PAGE_NAME && (
        <SelectedPagesList
          selectedPages={selectedPages}
          allPages={pages}
          handleUnselect={handleUnselect}
        />
      )}
    </CategoryLayout>
  );
}
