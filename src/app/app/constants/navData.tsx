import { TiHomeOutline } from 'react-icons/ti';

type Tab = {
  text: React.ReactNode;
  color: string;
  titleColor: string;
  name: string;
  title?: string;
  backgroundColor?: string;
  fontSize: number;
  margins: string;
};

export const tabs: Tab[] = [
  {
    text: <TiHomeOutline size={20} />,
    color: '#C6CAE9',
    titleColor: '#FFDBC3',
    name: 'home',
    title: 'crear',
    backgroundColor: '#FEF6E2',
    fontSize: 120,
    /* top | right | bottom | left */
    margins: '-69px 0 0 -5px',
  },
  {
    text: 'personal',
    color: '#C6F0EE',
    titleColor: '#86E4E0',
    name: 'personal',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    text: 'por mes',
    color: '#CAF1BC',
    titleColor: '#B5DAA8',
    name: 'monthly',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    text: 'año en pixeles',
    color: '#F2D4B1',
    titleColor: '#DABB98',
    title: 'pixeles',
    name: 'pixels',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    text: 'listas',
    color: '#F2B1B1',
    titleColor: '#D89A9A',
    name: 'lists',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    text: 'creativo',
    color: '#FBCAE1',
    titleColor: '#DEACC4',
    name: 'creative',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
];
