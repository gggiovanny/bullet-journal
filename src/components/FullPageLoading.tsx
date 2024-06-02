import { Size } from '@/app/types/sizes';

import { Loading } from './Loading';

type Props = {
  size?: Size;
};

export function FullPageLoading({ size }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loading size={size} />
    </div>
  );
}
