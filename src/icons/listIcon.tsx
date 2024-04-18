import StarIcon from './StarIcon';
import DocumentIcon from './DocumentIcon';
import { type SVGProps } from 'react';
import SearchIcon from './SearchIcon';
import LogoIcon from './LogoIcon';
import UserIcon from './UserIcon';
import ReloadIcon from './ReloadIcon';
import LogoutIcon from './LogoutIcon.tsx';
import ExpandMoreIcon from './ExpandMoreIcon';
import ExpandLessIcon from './ExpandLessIcon';
import ComponentIcon from './ComponentIcon';
import AcademicCapIcon from './AcademicCapIcon';

export type IconNames = keyof typeof listIcon;
type IconProps = SVGProps<SVGSVGElement> & {
  color?: string;
  size?: React.SVGAttributes<SVGSVGElement>['width'];
};
const listIcon = {
  icon_star: ({ size, ...props }: IconProps) => <StarIcon width={size} height={size} {...props} />,
  icon_document: ({ size, ...props }: IconProps) => (
    <DocumentIcon width={size} height={size} {...props} />
  ),
  icon_search: ({ size, ...props }: IconProps) => (
    <SearchIcon width={size} height={size} {...props} />
  ),
  icon_logo: ({ size, ...props }: IconProps) => <LogoIcon width={size} height={size} {...props} />,
  icon_user: ({ size, ...props }: IconProps) => <UserIcon width={size} height={size} {...props} />,
  icon_reload: ({ size, ...props }: IconProps) => (
    <ReloadIcon width={size} height={size} {...props} />
  ),
  icon_Logout: ({ size, ...props }: IconProps) => (
    <LogoutIcon width={size} height={size} {...props} />
  ),
  icon_expand_more: ({ size, ...props }: IconProps) => (
    <ExpandMoreIcon width={size} height={size} {...props} />
  ),
  icon_expand_less: ({ size, ...props }: IconProps) => (
    <ExpandLessIcon width={size} height={size} {...props} />
  ),
  icon_component: ({ size, ...props }: IconProps) => (
    <ComponentIcon width={size} height={size} {...props} />
  ),
  icon_academic_cap: ({ size, ...props }: IconProps) => (
    <AcademicCapIcon width={size} height={size} {...props} />
  ),
};

export default listIcon;
