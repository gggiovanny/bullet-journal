import { useState } from 'react';
import {
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacCancer,
  TbZodiacCapricorn,
  TbZodiacGemini,
  TbZodiacLeo,
  TbZodiacPisces,
  TbZodiacSagittarius,
  TbZodiacScorpio,
  TbZodiacTaurus,
  TbZodiacVirgo,
} from 'react-icons/tb';

import { CircleIconButton } from '@/components/CircleIconButton';
import { PanelSelector } from '@/components/PanelSelector';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type Props = {};

const title = 'mi signo zodiacal';

const zodiacSigns: {
  name: string;
  icon: React.ReactNode;
  color?: string;
  backgroundColor?: string;
}[] = [
  {
    name: 'libra',
    icon: <TbZodiacAquarius size={44} />,
    backgroundColor: '#BBF2BE',
  },
  {
    name: 'leo',
    icon: <TbZodiacLeo size={44} />,
    backgroundColor: '#FDA58F',
  },
  {
    name: 'geminis',
    icon: <TbZodiacGemini size={44} />,
    backgroundColor: '#F2EC91',
  },
  {
    name: 'picis',
    icon: <TbZodiacPisces size={44} />,
    backgroundColor: '#9794F2',
  },
  {
    name: 'acuario',
    icon: <TbZodiacAquarius size={44} />,
    backgroundColor: '#E1CFFF',
  },
  {
    name: 'capricornio',
    icon: <TbZodiacCapricorn size={44} />,
    backgroundColor: '#AFE7FE',
  },
  {
    name: 'aries',
    icon: <TbZodiacAries size={44} />,
    backgroundColor: '#D95F76',
  },
  {
    name: 'sagitario',
    icon: <TbZodiacSagittarius size={44} />,
    backgroundColor: '#FFFED0',
    color: '#ED9E8F',
  },
  {
    name: 'virgo',
    icon: <TbZodiacVirgo size={44} />,
    backgroundColor: '#E88EB4',
  },
  {
    name: 'cancer',
    icon: <TbZodiacCancer size={44} />,
    backgroundColor: '#A0DCE4',
  },
  {
    name: 'tauro',
    icon: <TbZodiacTaurus size={44} />,
    backgroundColor: '#FFD2C5',
  },
  {
    name: 'escorpio',
    icon: <TbZodiacScorpio size={44} />,
    backgroundColor: '#A4E2CC',
  },
];

export function ZodiacSignSelector({}: Props) {
  const [selectedItem, setSelectedItem] = useState<string | undefined>();
  console.log(
    '🚀 ~ file: ZodiacSignSelector.tsx:20 ~ ZodiacSignSelector ~ selectedItem:',
    selectedItem
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CircleIconButton
          className="bg-white"
          style={{
            color: 'gray',
          }}
        >
          <TbZodiacAquarius size={44} />
        </CircleIconButton>
      </DialogTrigger>
      <DialogContent className="max-w-[320px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <PanelSelector onValueChange={setSelectedItem}>
          {zodiacSigns.map(({ name, icon, backgroundColor, color }) => (
            <div key={name} className="flex flex-col items-center">
              <CircleIconButton
                className="bg-melon"
                style={{
                  color: color ?? 'white',
                  backgroundColor,
                }}
              >
                {icon}
              </CircleIconButton>
              <span className="text-melon text-xs ">{name}</span>
            </div>
          ))}
        </PanelSelector>
      </DialogContent>
    </Dialog>
  );
}
