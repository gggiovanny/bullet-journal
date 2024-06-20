import cn from 'clsx';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UserPage } from '@/supabase';

type Props = {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  pageList: UserPage[];
  currentPage: UserPage;
  className?: string;
};

export function Paginator({
  currentPage,
  pageList,
  handleNextPage,
  handlePreviousPage,
  className,
}: Props) {
  const surfaceClasses = 'p-1 bg-white shadow-button-shadow z-50';

  return (
    <div
      className={cn('flex flex-row justify-between text-icon-color', className)}
    >
      <div
        className={cn(surfaceClasses, 'rounded-l-2xl')}
        onClick={handlePreviousPage}
      >
        <IoIosArrowBack size={24} />
      </div>
      <div
        className={cn(
          surfaceClasses,
          'p-0 flex-grow flex flex-row justify-center gap-2 items-center'
        )}
      >
        <Select>
          <SelectTrigger className="border-none h-full justify-center gap-2 font-bold">
            <SelectValue placeholder={currentPage.name} />
          </SelectTrigger>
          <SelectContent>
            {pageList.map(page => (
              <SelectItem
                key={page.id}
                value={page.id}
                hideIndicator
                className="font-bold pl-2 justify-center"
              >
                {page.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div
        className={cn(surfaceClasses, 'rounded-r-2xl')}
        onClick={handleNextPage}
      >
        <IoIosArrowForward size={24} />
      </div>
    </div>
  );
}
