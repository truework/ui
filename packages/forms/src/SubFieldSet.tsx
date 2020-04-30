import styled, { css } from 'styled-components';
import { Box, BoxProps } from '@truework/ui';

export const SubFieldSet = styled(Box)<BoxProps>(
  ({ theme }) => css`
    border-left: 2px solid currentColor;
    padding-left: ${theme.space.sm};
  `
);
