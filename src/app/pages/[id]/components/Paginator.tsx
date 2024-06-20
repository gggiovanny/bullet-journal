import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { UserPage } from '@/supabase';

type Props = {
  onNextPage: () => void;
  onPreviousPage: () => void;
  onValueChange: (value: string) => void;
  pageList: UserPage[];
  currentPage: UserPage;
  className?: string;
  isFirstPage: boolean;
  isLastPage: boolean;
};

export function Paginator({
  currentPage,
  pageList,
  onNextPage,
  onPreviousPage,
  onValueChange,
  className,
  isFirstPage,
  isLastPage,
}: Props) {
  const surfaceClasses = 'p-1 bg-white shadow-button-shadow z-50';
  const disabledArrowClasses = 'cursor-not-allowed opacity-60';

  return (
    <div
      className={cn('flex flex-row justify-between text-icon-color', className)}
    >
      <div
        className={cn(surfaceClasses, 'rounded-l-2xl cursor-pointer', {
          [disabledArrowClasses]: isFirstPage,
        })}
        onClick={onPreviousPage}
      >
        <IoIosArrowBack size={24} />
      </div>
      <div
        className={cn(
          surfaceClasses,
          'p-0 flex-grow flex flex-row justify-center gap-2 items-center'
        )}
      >
        <Select onValueChange={onValueChange}>
          <SelectTrigger className="border-none h-full justify-center gap-2 font-bold">
            <SelectValue placeholder={currentPage.name} />
          </SelectTrigger>
          <SelectContent>
            {pageList.map((page, index) => (
              <SelectItem
                key={page.id}
                value={`${index}`}
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
        className={cn(surfaceClasses, 'rounded-r-2xl cursor-pointer', {
          [disabledArrowClasses]: isLastPage,
        })}
        onClick={onNextPage}
      >
        <IoIosArrowForward size={24} />
      </div>
    </div>
  );
}
