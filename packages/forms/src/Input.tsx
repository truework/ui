import * as React from 'react';
import styled from 'styled-components';
import { Field, FieldProps, FieldConfig } from 'formik';
import { get } from 'lodash';
import { Box } from '@truework/ui';

import { Label } from './Label';

export type InputProps = {
  name: string;
  label?: string;
  small?: boolean;
  preTab?: React.ReactNode;
  postTab?: React.ReactNode;
  hasValue?: boolean;
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type InputFieldProps = InputProps &
  Pick<FieldConfig, 'validate'>;

export type InputFieldWithLabelProps = {
  label: string;
} & InputFieldProps;

const InputElement = styled.input<InputProps>(
  ({ theme, small, hasValue, hasError }) => `
  appearance: none;
  border: none;
  display: block;
  position: relative;
  font-family: ${theme.fonts.roboto};
  color: ${theme.colors.body};
  font-size: ${small ? theme.fontSizes[0] : theme.fontSizes[1]};
  line-height: ${theme.lineHeights[0]};
  letter-spacing: 0.6px;
  width: 100%;
  margin: 0;
  min-height: ${small ? '36px' : '48px'};
  padding: ${small ? '10px' : theme.space.sm};
  background: transparent;
  color: ${hasValue ? theme.colors.body : theme.colors.secondary};
  cursor: pointer;
  z-index: 2;
  transition-property: border-color, color;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;

  &::placeholder {
    color: ${theme.colors.secondary};
    line-height: ${theme.lineHeights[0]};
    opacity: 1;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: ${theme.colors.body};
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
  &:disabled {
    background: transparent;
    color: ${theme.colors.placeholder};
    cursor: not-allowed;
    & ~ .__border {
      background: ${theme.colors.background};
      cursor: not-allowed;
    }
  }
  &:invalid,
  &:not(:disabled):active,
  &:not(:disabled):focus,
  &:not(:disabled):hover {
    box-shadow: none;
    outline: 0;
    color: ${theme.colors.body};

    & ~ .__bg {
      opacity: 1;
    }
    & ~ .__border {
      border-color: ${hasError ? theme.colors.error : theme.colors.primary};
    }
    & ~ .__tab {
      border-color: ${hasError ? theme.colors.error : theme.colors.primary};
      color: ${hasError ? theme.colors.error : theme.colors.primary};
    }
  }
  ${
    small
      ? `
    & ~ .__tab {
      padding: 10px;
    }
    `
      : ``
  }
`
);

InputElement.displayName = 'InputElement';

export const Input = React.forwardRef(
  (
    { hasError, preTab, postTab, ...props }: InputProps,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const hasPrefix = Boolean(preTab);
    const tab = preTab || postTab;

    return (
      <Box display="flex" ml="-2px" mr="-2px" p="2px">
        <InputElement ref={ref} hasError={hasError} {...props} />

        {tab && (
          <Box
            className="__tab"
            aria-hidden="true"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="sm"
            zIndex={1}
            color={hasError ? 'error' : 'secondary'}
            bg={hasError ? '#FDEBF0' : 'background'}
            borderTopLeftRadius={hasPrefix ? '4px' : '0'}
            borderBottomLeftRadius={hasPrefix ? '4px' : '0'}
            borderTopRightRadius={hasPrefix ? '0' : '4px'}
            borderBottomRightRadius={hasPrefix ? '0' : '4px'}
            border={['1px solid', hasError ? 'error' : 'outline']}
            order={hasPrefix ? -1 : 1}
            transitionProperty="border-color, color"
            transitionDuration="fast"
            transitionTimingFunction="ease"
          >
            {tab}
          </Box>
        )}

        <Box
          className="__bg"
          bg={hasError ? 'error-alpha01' : 'primary-alpha01'}
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          zIndex={0}
          borderRadius="6px"
          opacity={0}
          transitionProperty="opacity"
          transitionDuration="fast"
          transitionTimingFunction="ease"
        />
        <Box
          className="__border"
          bg="white"
          border={['1px solid', hasError ? 'error' : 'outline']}
          position="absolute"
          top="2px"
          bottom="2px"
          left="2px"
          right="2px"
          zIndex={0}
          borderRadius="4px"
          transitionProperty="border-color"
          transitionDuration="fast"
          transitionTimingFunction="ease"
        />
      </Box>
    );
  }
);

export function InputField({
  name,
  validate,
  onChange,
  onBlur,
  ...rest
}: InputFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', name]));

        return (
          <Input
            {...rest}
            {...field}
            hasError={hasError}
            onChange={(e) => {
              field.onChange(e);
              if (onChange) onChange(e);
            }}
            onBlur={(e) => {
              field.onBlur(e);
              if (onBlur) onBlur(e);
            }}
          />
        );
      }}
    </Field>
  );
}

export function InputFieldWithLabel(props: InputFieldWithLabelProps) {
  return (
    <>
      <Label htmlFor={props.name}>{props.label}</Label>
      <InputField {...props} />
    </>
  );
}
