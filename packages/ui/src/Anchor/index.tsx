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
  external,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) {
  return (
    <Anchor
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Anchor>
  );
}