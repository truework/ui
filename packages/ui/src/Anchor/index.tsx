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
  as = 'a',
  children,
  href,
  external,
}: {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) {
  return (
    <Anchor
      as={as}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Anchor>
  );
}