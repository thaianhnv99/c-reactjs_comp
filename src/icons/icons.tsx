import StarIcon from './StarIcon';
import DocumentIcon from './DocumentIcon';
import { type SVGProps } from 'react';
import SearchIcon from './SearchIcon';

export type IconNames = keyof typeof icons;
type IconProps = SVGProps<SVGSVGElement> & {
  color?: string;
  size?: string;
};
const icons = {
  icon_star: ({ size, ...props }: IconProps) => <StarIcon width={size} height={size} {...props} />,
  icon_document: ({ size, ...props }: IconProps) => (
    <DocumentIcon width={size} height={size} {...props} />
  ),
  icon_search: ({ size, ...props }: IconProps) => (
    <SearchIcon width={size} height={size} {...props} />
  ),
};

export default icons;
