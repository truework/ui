import { css } from 'styled-components';

import { IBaseFormField } from './types';

export const base = css<IBaseFormField>`
  display: block;
  font-family: ${(props) => props.theme.fonts.roboto};
  background-color: white;
  color: ${(props) => props.theme.colors.body};
  font-size: ${(props) => props.theme.fontSizes[1]};
  line-height: ${(props) => props.theme.lineHeights[0]};
  letter-spacing: 0.6px;
  appearance: none;
  width: 100%;
  margin: 0;
  height: 48px;

  &::placeholder {
    color: ${(props) => props.theme.colors.secondary};
    line-height: ${(props) => props.theme.lineHeights[0]};
    opacity: 1;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.colors.body};
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
  &:invalid,
  &:-moz-ui-invalid {
    box-shadow: none;
    outline: 0;
    border-color: ${(props) => props.theme.colors.error};
  }
  &:disabled {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.secondary};
    cursor: not-allowed;
  }
`;

export const padding = css<IBaseFormField>`
  padding: 15px ${(props) => props.theme.space.sm};
`;

export const border = css<IBaseFormField>`
  border: 1px solid ${(props) => props.theme.colors.outline};
  border-color: ${(props) =>
    props.hasError ? props.theme.colors.error : props.theme.colors.outline};
  border-radius: 4px;
  transition-property: border-color, color;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;

  &:not(:disabled):focus,
  &:not(:disabled):hover {
    outline: 0;
    border-color: ${(props) =>
      props.hasError ? props.theme.colors.error : props.theme.colors.primary};
  }
`;
