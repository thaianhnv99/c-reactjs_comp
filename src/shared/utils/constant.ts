import { type MenuItem } from 'src/types';

export const menu: Array<MenuItem> = [
  {
    name: 'Component',
    subItem: [
      {
        name: 'Home',
        url: 'home',
        icon: 'icon_document',
        title: 'Home',
        description: 'Serializing AdonisJS models to camelCase globally',
      },
      {
        name: 'Example',
        url: '/example',
        icon: 'icon_document',
        title: 'Example',
        description: 'Serializing AdonisJS models to camelCase globally',
      },
      {
        name: 'Slider',
        url: '/slider',
        icon: 'icon_document',
        title: 'Slider',
        description: 'Serializing AdonisJS models to camelCase globally',
      },
      {
        name: 'Accordion',
        url: '/accordion',
        icon: 'icon_document',
        title: 'Accordion',
        description: 'Serializing AdonisJS models to camelCase globally',
      },
      {
        name: 'Responsive layout',
        url: '/responsive-layout',
        icon: 'icon_document',
        title: 'Responsive layout',
        description: 'Serializing AdonisJS models to camelCase globally',
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
        title: 'useTransition',
        description:
          'useTransition is a React Hook that lets you update the state without blocking the UI.',
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
