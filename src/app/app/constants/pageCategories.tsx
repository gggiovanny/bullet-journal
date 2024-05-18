import { TiHomeOutline } from 'react-icons/ti';

type CategoryTab = {
  id: string;
  nodeContent: React.ReactNode;
  title?: string;
  color: string;
  titleColor: string;
  backgroundColor?: string;
  fontSize: number;
  margins: string;
};

export const categoryTabs: CategoryTab[] = [
  {
    id: 'home',
    nodeContent: <TiHomeOutline size={20} />,
    title: 'crear',
    color: '#C6CAE9',
    titleColor: '#FFDBC3',
    backgroundColor: '#FEF6E2',
    fontSize: 120,
    /* top | right | bottom | left */
    margins: '-69px 0 0 -5px',
  },
  {
    id: 'personal',
    nodeContent: 'personal',
    color: '#C6F0EE',
    titleColor: '#86E4E0',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    id: 'monthly',
    nodeContent: 'por mes',
    color: '#CAF1BC',
    titleColor: '#B5DAA8',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    id: 'pixels',
    nodeContent: 'año en pixeles',
    title: 'pixeles',
    color: '#F2D4B1',
    titleColor: '#DABB98',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    id: 'lists',
    nodeContent: 'listas',
    color: '#F2B1B1',
    titleColor: '#D89A9A',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
  {
    id: 'creative',
    nodeContent: 'creativo',
    color: '#FBCAE1',
    titleColor: '#DEACC4',
    fontSize: 75,
    margins: '-30px 0 0 0px',
  },
].map(tab => {
  // default value fixes
  if (!tab.title) tab['title'] = tab.nodeContent as string;

  return tab;
});
