import * as React from 'react';
import { Field, FieldProps } from 'formik';
import { get } from 'lodash';
import styled, { css } from 'styled-components';
import { Box, Span, H5 } from '@truework/ui';

import useTooltip from './utils/useTooltip';
import * as breakpoints from './utils/breakpoints';

import { BaseLabel } from './BaseLabel';
import { Info, InfoButton } from './InfoComponents';

const RadioCheck = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 1px solid ${theme.colors.outline};
    transition-property: background, border-color;
    transition-duration: ${theme.transitionDurations.fast};
    transition-timing-function: ${theme.transitionTimingFunctions.ease};

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: white;
      transition-property: transform;
      transition-duration: ${theme.transitionDurations.fast};
      transition-timing-function: ${theme.transitionTimingFunctions.ease};
      transform: scale(0);
    }
  `
);

const RadioLabel = styled(H5)(
  ({ theme }) => css`
    transition-property: color;
    transition-duration: ${theme.transitionDurations.fast};
    transition-timing-function: ${theme.transitionTimingFunctions.ease};
  `
);

const RadioInput = styled.input(
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

    &:focus ~ ${RadioCheck} {
      border-color: ${theme.colors.primary};
    }
    &:checked ~ ${RadioCheck} {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &::after {
        transform: scale(1);
      }
    }
    &:focus ~ ${RadioLabel}, &:checked ~ ${RadioLabel} {
      color: ${theme.colors.primary};
    }
  `
);

const RadioButton = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.space.sm};
    border: 1px solid ${theme.colors.outline};
    border-top: 0;
    width: 100%;
    margin-bottom: 0 !important;
    cursor: pointer;

    &:hover ${RadioCheck} {
      border-color: ${theme.colors.primary};
    }
    &:hover ${RadioLabel} {
      color: ${theme.colors.primary};
    }
  `
);

const RadioGroup = styled.div<{ hasError: boolean }>(
  ({ theme, hasError }) => css`
    width: 100%;

    ${RadioButton}:first-child {
      border-top: 1px solid ${theme.colors.outline};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    ${RadioButton}:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    ${hasError
      ? css`
          & ${RadioButton} {
            border-color: ${theme.colors.error} !important;
          }
        `
      : ``}
  `
);

type RadioProps = {
  label: string;
  name: string;
  optional?: boolean;
  validate?: (value: any) => string | Promise<any> | undefined;
  info?: any;
  showInfoAsTooltip?: boolean;
  options: {
    label: string;
    value: string;
  }[];
};

export function Radio({
  label,
  name,
  optional,
  validate,
  info,
  showInfoAsTooltip,
  options,
}: RadioProps) {
  const { active, toggleActive, tooltipRef, toggleRef } = useTooltip({
    enabled: Boolean(showInfoAsTooltip && breakpoints.med()),
  });

  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', field.name]));

        return (
          <Box>
            <Box display="flex" justifyContent="space-between" pb="3px">
              <BaseLabel // eslint-disable-line jsx-a11y/label-has-for
                htmlFor={name}
                pr="med"
              >
                {label}
                {optional && (
                  <Span
                    fontSize="1"
                    lineHeight="1"
                    fontStyle="italic"
                    color="placeholder"
                    ml="xs"
                    fontWeight="normal"
                  >
                    Optional
                  </Span>
                )}
              </BaseLabel>

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

            <RadioGroup hasError={hasError}>
              {options.map((item) => (
                <RadioButton key={item.value} htmlFor={item.value}>
                  <RadioInput
                    {...field}
                    id={item.value}
                    type="radio"
                    name={field.name}
                    value={item.value}
                    checked={Boolean(item.value === field.value)}
                  />
                  <RadioCheck />
                  <RadioLabel ml="xs" aria-label={`${label} - ${item.label}`}>
                    {item.label}
                  </RadioLabel>
                </RadioButton>
              ))}
            </RadioGroup>
          </Box>
        );
      }}
    </Field>
  );
}
