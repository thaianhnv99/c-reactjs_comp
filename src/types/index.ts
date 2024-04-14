import { type IconNames } from 'src/icons/listIcon';

type SubItemsWithoutItself = Omit<MenuItem, 'subItem' | 'title' | 'description'>;
export type SubItems = Required<SubItemsWithoutItself> & Pick<MenuItem, 'title' | 'description'>;
export interface MenuItem {
  name: string;
  title?: string;
  description?: string;
  url?: string;
  subItem?: SubItems[];
  icon?: IconNames;
}
