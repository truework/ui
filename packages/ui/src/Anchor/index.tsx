import styled from 'styled-components';
import * as React from 'react';

const Anchor = styled.a(
  ({ theme }) => `
    color: ${theme.colors.primary} !important;
    font-weight: ${theme.fontWeights[5]};

    &:hover {
      text-decoration: underline;
    }
  `
);

export function A({
  children,
  href,
  target,
}: {
  children: React.ReactChild;
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
}) {
  const t = target || '_blank';

  return (
    <Anchor href={href} target={t} rel="noopener noreferrer">
      {children}
    </Anchor>
  );
}