import * as React from 'react';
import { ColorProps } from 'styled-system';

import { Box } from '../Box';

export function Circle({
  children,
  size = 32,
  ...rest
}: {
  children: React.ReactNode;
  size?: number;
} & ColorProps &
  React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Box
      width={`${size}px`}
      height={`${size}px`}
      borderRadius="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      {children}
    </Box>
  );
}
