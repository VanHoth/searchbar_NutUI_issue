/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconShangpuchuzu from './IconShangpuchuzu';
export { default as IconShangpuchuzu } from './IconShangpuchuzu';

export type IconNames = 'shangpuchuzu';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'shangpuchuzu':
      return <IconShangpuchuzu {...rest} />;

  }

  return null;
};

export default IconFont;
