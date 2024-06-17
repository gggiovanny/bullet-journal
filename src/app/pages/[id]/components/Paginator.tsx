import cn from 'clsx';
import React from 'react';
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from 'react-icons/io';

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
  handleNextPage,
  handlePreviousPage,
  className,
}: Props) {
  const surfaceClasses = 'p-1 bg-white shadow-button-shadow';

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
          'flex-grow flex flex-row justify-center gap-2 items-center'
        )}
      >
        <span className="text-text-color font-bold">{currentPage.name}</span>
        <IoIosArrowDown size={20} />
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
