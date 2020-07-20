import * as React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { Field, FieldProps, FieldConfig } from 'formik';
import { Span, H5, Icon } from '@truework/ui';

export type CheckboxProps = {
  name: string;
  checked?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type CheckboxFieldProps = { name: string } & CheckboxProps &
  Pick<FieldConfig, 'validate'>;

const StyledIcon = styled(Icon)``;

const Check = styled.div<{ checked?: boolean }>(
  ({ theme, checked }) => `
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    margin-top: 2px;
    margin-right: 8px;
    border: 1px solid ${checked ? theme.colors.primaryDark : theme.colors.outline};
    transition-property: background, border-color;
    transition-duration: ${theme.transitionDurations.fast};
    transition-timing-function: ${theme.transitionTimingFunctions.ease};

    ${StyledIcon} {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 12px;
      height: 12px;
      color: white;
      stroke: white;
      stroke-width: 2px;
      transition-property: transform;
      transition-duration: ${theme.transitionDurations.fast};
      transition-timing-function: ${theme.transitionTimingFunctions.ease};
      transform: scale(0);
    }
  `
);

const Label = styled(H5)(
  ({ theme }) => `
    width: calc(100% - 16px);
    transition-property: color;
    transition-duration: ${theme.transitionDurations.fast};
    transition-timing-function: ${theme.transitionTimingFunctions.ease};
  `
);

const Input = styled.input<CheckboxProps>(
  ({ theme, hasError }) => `
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    whitespace: nowrap;
    wordwrap: normal;

    &:focus ~ ${Check} {
      border-color: ${theme.colors.primaryDark};
    }
    &:checked ~ ${Check} {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primaryDark};

      ${StyledIcon} {
        transform: scale(1);
      }
    }
    &:focus ~ ${Label}, &:focus ~${Span}, &:checked ~ ${Span} {
      color: ${theme.colors.primary};
    }

    ${hasError ? `
      & ~ ${Check} {
        border-color: ${theme.colors.error} !important;
      }
      ` : ``}
  `
);

const CheckboxButton = styled.label<{disabled?: boolean}>(
  ({ theme, disabled }) => `
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0 !important;

    ${disabled ? `
      ${Check} {
        background: ${theme.colors.background};
      }
      ${Span} {
        color: ${theme.colors.placeholder};
      }
      ` :
      `
        &:hover ${Check} {
          border-color: ${theme.colors.primaryDark};
        }
        &:hover ${Label}, &:hover ${Span} {
          color: ${theme.colors.primary};
        }
      `
    }
  `
);

export const CheckboxGroup = styled.div(
  ({ theme }) => `
    width: 100%;

    ${CheckboxButton} {
      padding: ${theme.space.sm};
      border: 1px solid ${theme.colors.outline};
      border-top: none;
      display: flex;
      align-items: center;
    }

    ${CheckboxButton}:first-child {
      border-top: 1px solid ${theme.colors.outline};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    ${CheckboxButton}:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `
);

export function Checkbox({
  children,
  name,
  checked,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxButton htmlFor={name} disabled={disabled}>
      <Input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        {...props}
      />

      <Check checked={checked}>
        <StyledIcon name="Check" />
      </Check>

      <Span
        display="block"
        width="calc(100% - 16px)"
        fontSize={1}
        lineHeight={1}
        fontWeight={5}
        style={{
          transitionProperty: 'color',
          transitionDuration: '150ms',
          transitionTimingFunction: 'ease-in-out',
        }}
      >
        {children}
      </Span>
    </CheckboxButton>
  );
}

export function CheckboxField({
  name,
  validate,
  onChange,
  onBlur,
  ...rest
}: CheckboxFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', name]));

        return (
          <Checkbox
            {...rest}
            {...field}
            checked={Boolean(field.value)}
            hasError={hasError}
            onChange={e => {
              field.onChange(e);
              if (onChange) onChange(e);
            }}
            onBlur={e => {
              field.onBlur(e);
              if (onBlur) onBlur(e);
            }}
          />
        );
      }}
    </Field>
  );
}
