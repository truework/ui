import styled from 'styled-components';
import { Box, BoxProps } from '@truework/ui';

export const SubGroup = styled(Box)<BoxProps>(
  ({ theme }) => `
    border-left: 2px solid currentColor;
    padding-left: ${theme.space.sm};
  `
);
