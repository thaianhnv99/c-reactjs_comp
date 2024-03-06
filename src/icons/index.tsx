import React, { type ForwardedRef, type SVGProps } from 'react';
import icons, { type IconNames } from './icons';

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconNames;
  size?: string;
  color?: string;
};
const IconUI = ({ name, size = '28px', ...props }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  return icons[name]({ ref, size, ...props });
};

export default React.forwardRef(IconUI);
