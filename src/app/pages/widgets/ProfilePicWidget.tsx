import React from 'react';
import { BsPersonBoundingBox } from 'react-icons/bs';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  onUploadClick: () => void;
  imageSrc: string;
};

export function ProfilePicWidget({ onUploadClick, imageSrc }: Props) {
  return (
    <div>
      <Avatar className="w-60 h-60">
        <AvatarImage src={imageSrc} />
        <AvatarFallback onClick={onUploadClick}>
          <BsPersonBoundingBox size={100} />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
