import styled from 'styled-components'

export const A = styled.a(
  ({ theme }) => `
    color: ${theme.colors.primary} !important;
    font-weight: ${theme.fontWeights[5]};

    &:hover {
      text-decoration: underline;
    }
  `
)
