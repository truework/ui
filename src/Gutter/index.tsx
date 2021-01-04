import * as React from 'react';

import { Box } from '../Box';

export type GutterSizes = 'normal' | 'small';

export type GutterProps = {
  size?: GutterSizes;
  withVertical?: boolean;
  sizeVertical?: GutterSizes;
} & React.HTMLAttributes<HTMLDivElement>;

const gutters = {
  small: ['med', 'med', 'lg'],
  normal: ['med', 'med', 'xl'],
};

export function Gutter({
  children,
  size = 'normal',
  withVertical,
  sizeVertical,
  ...rest
}: React.PropsWithChildren<GutterProps>) {
  const gx = gutters[size];
  const gy = withVertical ? gutters[sizeVertical || size] : 0;

  return (
    <Box
      px={gx}
      py={gy}
      width="100%"
      position="static"
      {...rest}
    >
      {children}
    </Box>
  );
}
