import { type IconNames } from 'src/icons/listIcon';

type SubItemsWithoutItself = Omit<MenuItem, 'subItem'>;
export type SubItems = Required<SubItemsWithoutItself>;
export interface MenuItem {
  name: string;
  url?: string;
  subItem?: SubItems[];
  icon?: IconNames;
}
