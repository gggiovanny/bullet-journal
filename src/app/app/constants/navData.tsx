import { TiHomeOutline } from 'react-icons/ti';

type Tab = {
  text: React.ReactNode;
  color: string;
  name: string;
  title?: string;
  backgroundColor?: string;
};

export const tabs: Tab[] = [
  {
    text: <TiHomeOutline size={20} />,
    color: '#C6CAE9',
    name: 'home',
    title: 'crear',
    backgroundColor: '#FEF6E2',
  },
  {
    text: 'personal',
    color: '#C6F0EE',
    name: 'personal',
  },
  {
    text: 'por mes',
    color: '#CAF1BC',
    name: 'monthly',
  },
  {
    text: 'año en pixeles',
    color: '#F2D4B1',
    name: 'pixels',
  },
  {
    text: 'listas',
    color: '#F2B1B1',
    name: 'lists',
  },
  {
    text: 'creativo',
    color: '#FBCAE1',
    name: 'creative',
  },
];
