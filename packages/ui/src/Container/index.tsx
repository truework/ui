import * as React from 'react';

import { Sizes } from '../theme';
import { Box } from '../Box';

export type ContainerProps = {
  size?: keyof Sizes;
};

export function Container({
  children,
  size = 'lg',
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <Box mx="auto" maxWidth={size} width="100%">
      {children}
    </Box>
  );
}
