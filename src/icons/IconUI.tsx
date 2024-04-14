import React, { type ForwardedRef, type SVGProps } from 'react';
import icons, { type IconNames } from './listIcon';

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconNames;
  size?: React.SVGAttributes<SVGSVGElement>['width'];
  color?: string;
};
const IconUI = ({ name, size = 28, ...props }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return icons[name]({ ref, size, ...props });
};

export default React.forwardRef(IconUI);
