import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const A = styled.a(
  ({ theme }) => `
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeights[5]};

    &:hover {
      text-decoration: underline;
    }
  `
);

export const Link = styled(ReactRouterLink)(
  ({ theme }) => `
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeights[5]};

    &:hover {
      text-decoration: underline;
    }
  `
);
