import * as React from 'react';
import { Field, FieldProps } from 'formik';
import styled, { css } from 'styled-components';
import { Box, Icon, H5 } from '@truework/ui';

import useTooltip from './utils/useTooltip';
import * as breakpoints from './utils/breakpoints';
import { Info, InfoButton } from './InfoComponents';

const StyledIconCheck = styled(Icon)``;

const Check = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid ${theme.colors.primaryDark};
    transition-property: background, border-color;
    transition-duration: ${theme.transitionDurations.fast};
    transition-timing-function: ${theme.transitionTimingFunctions.ease};

    ${StyledIconCheck} {
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
      stroke-width: 1px;
      transition-property: transform;
      transition-duration: ${theme.transitionDurations.fast};
      transition-timing-function: ${theme.transitionTimingFunctions.ease};
      transform: scale(0);
    }
  `
);

const Label = styled(H5)(
  ({ theme }) => css`
    width: calc(100% - 16px);
    transition-property: color;
    transition-duration: ${theme.transitionDurations.fast};
    transition-timing-function: ${theme.transitionTimingFunctions.ease};
  `
);

const Input = styled.input(
  ({ theme }) => css`
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

      ${StyledIconCheck} {
        transform: scale(1);
      }
    }
    &:focus ~ ${Label} {
      color: ${theme.colors.primary};
    }
  `
);

const CheckboxButton = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0 !important;

    &:hover ${Check} {
      border-color: ${theme.colors.primaryDark};
    }
    &:hover ${Label} {
      color: ${theme.colors.primary};
    }
  `
);

type CheckboxProps = {
  label: string;
  name: string;
  validate?: (value: any) => string | Promise<any> | undefined;
  info?: any;
  showInfoAsTooltip?: boolean;
};

export function Checkbox({
  label,
  name,
  validate,
  info,
  showInfoAsTooltip,
}: CheckboxProps) {
  const { active, toggleActive, tooltipRef, toggleRef } = useTooltip({
    enabled: Boolean(showInfoAsTooltip && breakpoints.med()),
  });

  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        return (
          <Box>
            <Box display="flex" justifyContent="space-between" pb="3px">
              <CheckboxButton htmlFor={name}>
                <Input
                  {...field}
                  checked={field.value}
                  id={name}
                  type="checkbox"
                  name={name}
                />
                <Check>
                  <StyledIconCheck name="Check" />
                </Check>
                <Label ml="xs">{label}</Label>
              </CheckboxButton>

              {showInfoAsTooltip && (
                <InfoButton
                  ref={toggleRef}
                  active={active}
                  onClick={() => {
                    toggleActive();
                  }}
                />
              )}
            </Box>

            {info && (
              <Info
                ref={tooltipRef}
                showInfoAsTooltip={showInfoAsTooltip}
                active={active}
                content={info}
              />
            )}
          </Box>
        );
      }}
    </Field>
  );
}
