import clsx from 'clsx';
import { useState } from 'react';
import { PiCheckBold } from 'react-icons/pi';

type Props = {
  text: string;
  Icon: any;
};

export default function BigIconCheckbox({ text, Icon: TargetIcon }: Props) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const sizeClases = 'w-[84px] h-[84px]';

  const Icon = checked ? PiCheckBold : TargetIcon;
  return (
    <div
      className={clsx(
        sizeClases,
        'rounded-2.5xl text-melon bg-background-color flex flex-col justify-center gap-1 items-center pb-2 px-3 pt-2',
        {
          'shadow-button-shadow': !checked,
          'shadow-button-inner-shadow': checked,
        }
      )}
      onClick={handleClick}
    >
      <Icon size="46" />
      <span className="font-title font-extrabold text-xs text-center leading-[normal]">
        {text}
      </span>
    </div>
  );
}
