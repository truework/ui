import * as React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { Field, FieldProps, FieldConfig } from 'formik';
import { Box, Icon } from '@truework/ui';

import { Label } from './Label';

export type SelectProps = {
  hasValue?: boolean;
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLSelectElement>;

export type SelectFieldProps = { name: string } & SelectProps &
  Pick<FieldConfig, 'validate'>;

export type SelectFieldWithLabelProps = {
  label: string;
} & SelectFieldProps;

const SelectElement = styled.select<SelectProps>(
  ({ theme, hasValue, hasError }) => `
  appearance: none;
  border: none;
  display: block;
  position: relative;
  font-family: ${theme.fonts.roboto};
  color: ${theme.colors.body};
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.lineHeights[0]};
  letter-spacing: 0.6px;
  width: 100%;
  margin: 0;
  min-height: 48px;
  padding: ${theme.space.sm};
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
  &:-moz-ui-invalid,
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

      div {
        border-color: ${hasError ? theme.colors.error : theme.colors.primary};
        color: ${hasError ? theme.colors.error : theme.colors.primary};
      }
    }
  }
`
);

SelectElement.displayName = 'SelectElement';

export const Select = React.forwardRef(
  (
    { children, hasError, placeholder = '', ...props }: SelectProps,
    ref: React.RefObject<HTMLSelectElement>
  ) => {
    return (
      <Box ml="-2px" mr="-2px" p="2px">
        <SelectElement
          ref={ref}
          hasValue={Boolean(props.value)}
          hasError={hasError}
          {...props}
          value={props.value || ''}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </SelectElement>

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

        <Box
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          height="16px"
          my="auto"
          pr="sm"
          style={{
            pointerEvents: 'none',
          }}
        >
          <Icon name="ChevronDown" color="secondary" />
        </Box>
      </Box>
    );
  }
);

export function SelectField({
  name,
  validate,
  onChange,
  onBlur,
  ...rest
}: SelectFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', name]));

        return (
          <Select
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

export function SelectFieldWithLabel(props: SelectFieldWithLabelProps) {
  return (
    <>
      <Label htmlFor={props.name}>{props.label}</Label>
      <SelectField {...props} />
    </>
  );
}
