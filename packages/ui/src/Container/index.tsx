import * as React from 'react';

import { Sizes } from '../theme';
import { Box } from '../Box';

type ContainerProps = {
  children: React.ReactNode | React.ReactNode[];
  size?: keyof Sizes;
};

export function Container({ children, size = 'lg' }: ContainerProps) {
  return (
    <Box mx="auto" maxWidth={size} width="100%">
      {children}
    </Box>
  );
}
