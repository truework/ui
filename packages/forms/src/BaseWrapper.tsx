import * as React from 'react';
import styled from 'styled-components';

import { IBaseFormField } from './types';

type Props = {
  children: React.ReactElement | React.ReactElement[];
} & IBaseFormField;

const Wrapper = styled.div<IBaseFormField>`
  position: relative;
  padding: 3px;
  border-radius: 6px;
  margin-left: -2px;
  width: calc(100% + 4px);
  transition-property: background;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus-within {
    background: ${(props) =>
      props.hasError
        ? props.theme.colors['error-alpha01']
        : props.theme.colors['primary-alpha01']};
  }
`;

export function BaseWrapper({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
