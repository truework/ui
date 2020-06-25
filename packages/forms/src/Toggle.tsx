import * as React from 'react';
import styled from 'styled-components';
import { Field, FieldProps, FieldConfig } from 'formik';
import { Icon } from '@truework/ui';

export type ToggleProps = {
  label: string;
  name: string;
  checked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type ToggleFieldProps = { name: string } & ToggleProps &
  Pick<FieldConfig, 'validate'>;

export const hidden = `
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
`;

export const PillButton = styled.div(
  ({ theme }) => `
  display: block;
  position: absolute;
  top: 3px;
  bottom: 0;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  border: 1px solid ${theme.colors.outline};
  color: white;
  background: white;
  stroke: white;
  transition-property: transform, background, border-color;
  transition-duration: ${theme.transitionDurations.fast};
  transition-timing-function: ${theme.transitionTimingFunctions.natural};
`
);

export const Pill = styled.div(
  ({ theme }) => `
    position: relative;
    width: 56px;
    height: 32px;
    border-radius: 100px;
    border: 1px solid ${theme.colors.outline};
    background: ${theme.colors.background};
    cursor: pointer;
    transition-property: background, border-color;
    transition-duration: ${theme.transitionDurations.fast};
    transition-timing-function: ${theme.transitionTimingFunctions.natural};
  `
);

export const Target = styled.label(
  ({ theme }) => `
    display: flex;
    align-items: center;
    margin-bottom: 0 !important;

    &:hover ${Pill} {
      ${PillButton} {
        border-color: ${theme.colors.primaryDark};
      }
    }
  `
);

export const Input = styled.input(
  ({ theme }) => `
    ${hidden}

    &:focus ~ ${Pill} {
      border-color: ${theme.colors.primary};
    }
    &:checked ~ ${Pill} {
      border-color: ${theme.colors.primary};

      ${PillButton} {
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primaryDark};
        transform: translateX(24px);
      }
    }
    &:disabled ~ ${Pill} {
      pointer-events: none;
      ${PillButton} {
        border-color: ${theme.colors.outline};
      }
    }
  `
);

export const Label = styled.span`
  ${hidden}
`;

export function Toggle({
  label, // for a11y
  name,
  checked,
  ...props
}: React.PropsWithChildren<ToggleProps>) {
  return (
    <Target htmlFor={name}>
      <Input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        {...props}
      />

      <Pill>
        <PillButton>
          <Icon
            name="Check"
            width="12px"
            height="12px"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            m="auto"
            style={{
              strokeWidth: '2px',
            }}
          />
        </PillButton>
      </Pill>

      <Label>{label}</Label>
    </Target>
  );
}

export function ToggleField({ label, name, validate }: ToggleFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field }: FieldProps) => {
        return <Toggle label={label} {...field} checked={Boolean(field.value)} />;
      }}
    </Field>
  );
}
