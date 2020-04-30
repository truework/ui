import * as React from 'react';
import { PaddingProps } from 'styled-system';

import { Box } from '../Box';

export type GutterSizes = 'normal' | 'small';

export type GutterProps = {
  children: React.ReactNode | React.ReactNode[];
  size?: GutterSizes;
  withVertical?: boolean;
  sizeVertical?: GutterSizes;
  px?: PaddingProps['px'];
  py?: PaddingProps['py'];
} & PaddingProps;

const gutters = {
  small: ['med', 'med', 'lg'],
  normal: ['med', 'med', 'xl'],
};

export function Gutter({
  children,
  size = 'normal',
  withVertical,
  sizeVertical,
  px,
  py,
  className, // from styled-components
}: GutterProps & { className?: string }) {
  const gx = gutters[size];
  const gy = withVertical ? gutters[sizeVertical || size] : 0;

  return (
    <Box
      px={px || gx}
      py={py || gy}
      width="100%"
      position="static"
      className={className}
    >
      {children}
    </Box>
  );
}
