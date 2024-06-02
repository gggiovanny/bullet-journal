import { ImSpinner8 } from 'react-icons/im';

import { Size } from '@/app/types/sizes';

type Props = {
  size?: Size;
};

export function Loading({ size = 'sm' }: Props) {
  return (
    <div className={`flex justify-center items-center gap-1 text-${size}`}>
      <ImSpinner8 className="animate-spin" />
      <span>Cargando...</span>
    </div>
  );
}
