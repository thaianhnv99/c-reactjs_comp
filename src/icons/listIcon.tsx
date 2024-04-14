import StarIcon from './StarIcon';
import DocumentIcon from './DocumentIcon';
import { type SVGProps } from 'react';
import SearchIcon from './SearchIcon';
import LogoIcon from './LogoIcon';

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
};

export default listIcon;
