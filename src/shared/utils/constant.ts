import { type MenuItem } from 'src/types';

export const menu: Array<MenuItem> = [
  {
    name: 'Component',
    subItem: [
      {
        name: 'Home',
        url: '/home',
        icon: 'icon_document',
      },
      {
        name: 'Example',
        url: '/example',
        icon: 'icon_document',
      },
      {
        name: 'Slider',
        url: '/slider',
        icon: 'icon_document',
      },
      {
        name: 'Accordion',
        url: '/accordion',
        icon: 'icon_document',
      },
      {
        name: 'Responsive layout',
        url: '/responsive-layout',
        icon: 'icon_document',
      },
      {
        name: 'Date',
        url: '/date',
        icon: 'icon_document',
      },
      {
        name: 'List debounce',
        url: '/list-debounce',
        icon: 'icon_document',
      },
      {
        name: 'Toast',
        url: '/toast',
        icon: 'icon_document',
      },
    ],
  },
  {
    name: 'Hooks',
    subItem: [
      {
        name: 'useTransition',
        url: '/use-transition',
        icon: 'icon_document',
      },
    ],
  },
  {
    name: 'Lib',
    subItem: [
      {
        name: 'React query',
        url: '/react-query',
        icon: 'icon_document',
      },
      {
        name: 'SWR',
        url: '/swr',
        icon: 'icon_document',
      },
    ],
  },
  {
    name: 'Other',
    subItem: [
      {
        name: 'Icons',
        url: '/icons',
        icon: 'icon_document',
      },
    ],
  },
];
