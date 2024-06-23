'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { FullPageLoading } from '@/components/FullPageLoading';
import { Input } from '@/components/ui/input';
import { UserPage as UserPageType, UserPagesModel } from '@/supabase';

import { ProfilePicWidget } from '../widgets/ProfilePicWidget';
import { Paginator } from './components/Paginator';

type Props = { params: { id: string } };

async function getData() {
  const userPages = new UserPagesModel();
  const pageList = await userPages.all();
  return { pageList };
}

export default function UserPage({ params: { id } }: Props) {
  const router = useRouter();
  const [pageList, setPageList] = useState<UserPageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const currentPageNumber = Number(id);
  const currentPageIndex = currentPageNumber - 1;
  const page = pageList[currentPageIndex];
  const nextPageNumber = currentPageNumber + 1;
  const previousPageNumber = currentPageNumber - 1;
  const isFirstPage = currentPageNumber === 1;
  const isLastPage = currentPageNumber === pageList.length;

  useEffect(() => {
    setIsLoading(true);

    getData()
      .then(({ pageList }) => setPageList(pageList))
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleValueChange = (index: string) => {
    const pageIndex = Number(index) + 1;

    if (currentPageIndex === pageIndex) return;

    router.push(`/pages/${pageIndex}`);
  };

  const handleNextPage = () => {
    if (isLastPage) return;

    router.push(`/pages/${nextPageNumber}`);
  };

  const handlePreviousPage = () => {
    if (isFirstPage) return;

    router.push(`/pages/${previousPageNumber}`);
  };

  return (
    <>
      {isLoading && <FullPageLoading />}
      {!isLoading && page && (
        <div className="m-5">
          <Paginator
            currentPage={page}
            pageList={pageList}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            onValueChange={handleValueChange}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
          />
          <div className="flex flex-row justify-center my-5">
            <ProfilePicWidget
              onUploadClick={() => {
                // eslint-disable-next-line no-console
                console.log('onUploadClick');
              }}
              imageSrc={'https://github.com/shadcn.png'}
            />
          </div>
          <Input type="text" placeholder="mi nombre es..." />
        </div>
      )}
    </>
  );
}
