import { type IconNames } from 'src/icons/icons';

export type SubItems = Required<Omit<MenuItem, 'subItem'>>;
export interface MenuItem {
  title: string;
  url?: string;
  subItem?: SubItems[];
  icon?: IconNames;
}
