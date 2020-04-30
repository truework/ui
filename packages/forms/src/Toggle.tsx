import { Field, FieldProps } from 'formik';
import styled, { css } from 'styled-components';
import * as React from 'react';
import { Icon } from '@truework/ui';

const hidden = `
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

const PillButton = styled.div(
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

const Pill = styled.div(
  ({ theme }) => css`
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

const Target = styled.label(
  ({ theme }) => css`
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

const Input = styled.input(
  ({ theme }) => css`
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

const Label = styled.span`
  ${hidden}
`;

export function Toggle({ label, name }: { label: string; name: string }) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => {
        return (
          <Target htmlFor={name}>
            <Input
              {...field}
              checked={field.value}
              id={name}
              type="checkbox"
              name={name}
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
                />
              </PillButton>
            </Pill>

            <Label>{label}</Label>
          </Target>
        );
      }}
    </Field>
  );
}
