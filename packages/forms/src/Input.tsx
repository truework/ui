import * as React from 'react';
import { Field, FieldProps } from 'formik';
import { get } from 'lodash';
import { Box, Span, theme } from '@truework/ui';

import useTooltip from './utils/useTooltip';

import { BaseLabel } from './BaseLabel';
import { BaseWrapper } from './BaseWrapper';
import { BaseInput } from './BaseInput';
import { Info, InfoButton } from './InfoComponents';

interface IField {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  optional?: boolean;
  validate?: (value: any) => string | Promise<any> | undefined;
  onBlur?: (e: React.FocusEvent<any>) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  info?: any;
  showInfoAsTooltip?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  small?: boolean;
}

export function Input({
  label,
  name,
  type,
  placeholder,
  optional,
  validate,
  onBlur,
  onChange,
  info,
  showInfoAsTooltip,
  disabled,
  hideLabel,
  small,
}: IField) {
  const { active, toggleActive, tooltipRef, toggleRef } = useTooltip({
    enabled: Boolean(
      showInfoAsTooltip &&
        window.matchMedia(`(min-width: ${theme.breakpoints[1]})`).matches
    ),
  });

  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', field.name]));
        const handleBlur = (e: React.FocusEvent<any>) => {
          field.onBlur(e);
          if (onBlur !== undefined) {
            onBlur(e);
          }
        };
        const handleChange = (e: React.ChangeEvent<any>) => {
          field.onChange(e);
          if (onChange !== undefined) {
            onChange(e);
          }
        };

        return (
          <Box>
            {!hideLabel && (
              <Box display="flex" justifyContent="space-between">
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
            )}

            {info && (
              <Info
                ref={tooltipRef}
                showInfoAsTooltip={showInfoAsTooltip}
                active={active}
                content={info}
              />
            )}

            <BaseWrapper hasError={hasError}>
              <BaseInput
                {...field}
                hasError={hasError}
                id={name}
                type={type || 'text'}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={placeholder || label}
                disabled={disabled}
                aria-label={label}
                small={small}
              />
            </BaseWrapper>
          </Box>
        );
      }}
    </Field>
  );
}
