import { ReactNode } from "react";

export interface MenuItem {
  title: string;
  url?: string;
  icon?: ReactNode;
  isSub?: boolean;
  subItem?: MenuItem[]
}