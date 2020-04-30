import styled from 'styled-components';

import { IBaseFormField } from './types';
import * as styles from './styles';

export const BaseInput = styled.input<IBaseFormField>`
  ${styles.base};
  ${styles.padding};
  ${styles.border};

  &[type='number'] {
    font-family: 'Roboto Mono', monospace;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  &[type='date'] {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondary};
    &:not([value='']) {
      color: ${(props) => props.theme.colors.body};
    }
  }

  ${(props) =>
    props.small &&
    `
          height: 36px;
          padding: 0px 16px;
          margin-right: 16px;
          font-size: ${props.theme.fontSizes[0]};
          line-height: 33px;

          &::placeholder {
            line-height: 33px;
          }
        `}
`;
