import { type MenuItem } from 'src/types';

export const menu: Array<MenuItem> = [
  {
    title: 'Component',
    subItem: [
      {
        title: 'Home',
        url: '/home',
        icon: 'icon_document',
      },
      {
        title: 'Example',
        url: '/example',
        icon: 'icon_document',
      },
      {
        title: 'Slider',
        url: '/slider',
        icon: 'icon_document',
      },
      {
        title: 'Accordion',
        url: '/accordion',
        icon: 'icon_document',
      },
      {
        title: 'Grid',
        url: '/grid',
        icon: 'icon_document',
      },
      {
        title: 'Date',
        url: '/date',
        icon: 'icon_document',
      },
      {
        title: 'List debounce',
        url: '/list-debounce',
        icon: 'icon_document',
      },
      {
        title: 'Toast',
        url: '/toast',
        icon: 'icon_document',
      },
    ],
  },
  {
    title: 'Hooks',
    subItem: [
      {
        title: 'useTransition',
        url: '/transition',
        icon: 'icon_document',
      },
    ],
  },
  {
    title: 'Lib',
    subItem: [
      {
        title: 'React query',
        url: '/react-query',
        icon: 'icon_document',
      },
      {
        title: 'SWR',
        url: '/swr',
        icon: 'icon_document',
      },
    ],
  },
  {
    title: 'Other',
    subItem: [
      {
        title: 'Icons',
        url: '/icons',
        icon: 'icon_document',
      },
    ],
  },
];
