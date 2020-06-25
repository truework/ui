import * as React from 'react';
import { Field, FieldProps, FieldConfig } from 'formik';
import { get, times } from 'lodash';
import styled, { css } from 'styled-components';
import { Box, Icon } from '@truework/ui';

import { getLastDayOfMonth, zeroPadDate } from './utils/date';
import { Label } from './Label';

export type DateValidationOptions = {
  initialMonth?: number;
  initialDay?: number;
  initialYear?: number;
  minMonth?: number;
  minDay?: number;
  minYear?: number;
  maxMonth?: number;
  maxDay?: number;
  maxYear?: number;
};

export type DateInputSelectProps = {
  hasValue?: boolean;
  hasError?: boolean;
};

export type DateInputProps = {
  name: string;
  label: string; // required for a11y
  hasError?: boolean;
  onUpdate(date: string): void;
} & DateValidationOptions & React.InputHTMLAttributes<HTMLSelectElement>;

export type DateInputFieldProps = Omit<DateInputProps, 'onUpdate'> &
  Pick<FieldConfig, 'validate'>;

const DateInputSelect = styled.select<DateInputSelectProps>(
  ({ theme, hasValue, hasError }) => css`
  appearance: none;
  border: none;
  display: block;
  position: relative;
  font-family: ${theme.fonts.roboto};
  color: ${theme.colors.body};
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.lineHeights[0]};
  letter-spacing: 0.6px;
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

  &::-ms-expand {
    display: none;
  }
  &:disabled {
    background: transparent;
    color: ${props => props.theme.colors.placeholder};
    cursor: not-allowed;
    & ~ .__border {
      background: ${theme.colors.background};
      cursor: not-allowed;
    }
  }
  &:not(:disabled):active,
  &:not(:disabled):focus,
  &:not(:disabled):hover {
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

/**
 * IMPORTANT
 *
 * this component assumes all values are 1-indexed, even though months are
 * 0-indexed when using a Date constructor
 *
 * keep that in mind when adjusting the external API, and when adjusting the
 * internal date calculation logic: you may need to convert between the two
 */
export function DateInput({
  name,
  label = 'Date',
  disabled,
  initialMonth = 0,
  initialDay = 0,
  initialYear = 0,
  minMonth = 1,
  minDay = 1,
  minYear = 1980,
  maxMonth = 12,
  maxDay = 31,
  maxYear = 2030,
  hasError,
  onUpdate,
}: DateInputProps) {
  const monthRef = React.useRef<HTMLSelectElement>(null);
  const dayRef = React.useRef<HTMLSelectElement>(null);
  const yearRef = React.useRef<HTMLSelectElement>(null);
  const [month, setMonth] = React.useState(initialMonth);
  const [day, setDay] = React.useState(initialDay);
  const [year, setYear] = React.useState(initialYear);

  const maxDaysInMonth = getLastDayOfMonth({
    year: year || 2020,
    month,
  });

  React.useEffect(() => {
    if (year && month && day)
      onUpdate(`${year}-${zeroPadDate(month)}-${zeroPadDate(day)}`);
  }, [month, day, year]);

  return (
    <Box ml="-4px" mr="-4px" p="4px">
      <Box display="flex" alignItems="center" height="48px" pl="56px">
        <DateInputSelect
          ref={monthRef}
          name={`${name}-month`}
          value={month}
          disabled={disabled}
          onChange={e => {
            setMonth(parseInt(e.target.value, 10));
            if (dayRef.current) dayRef.current.focus();
          }}
          aria-label={`${label}: Month`}
          hasValue={Boolean(month)}
          hasError={hasError}
        >
          <option value="0" disabled selected>
            mm
          </option>
          {times(maxMonth - minMonth + 1, () => '').map((_, i) => {
            const value = minMonth + i;
            return (
              <option key={value} value={value}>
                {zeroPadDate(value)}
              </option>
            );
          })}
        </DateInputSelect>
        <Box
          height="50%"
          width="1px"
          bg={hasError ? 'error' : 'outline'}
          zIndex={2}
          transform="rotate(10deg)"
        />
        <DateInputSelect
          ref={dayRef}
          name={`${name}-day`}
          value={day}
          disabled={disabled}
          onChange={e => {
            setDay(parseInt(e.target.value, 10));
            if (yearRef.current) yearRef.current.focus();
          }}
          aria-label={`${label}: Day`}
          hasValue={Boolean(day)}
          hasError={hasError}
        >
          <option value="0" disabled selected>
            dd
          </option>
          {times(Math.min(maxDay, maxDaysInMonth) - minDay + 1, () => '').map(
            (_, i) => {
              const value = minDay + i;
              return (
                <option key={value} value={value}>
                  {zeroPadDate(value)}
                </option>
              );
            }
          )}
        </DateInputSelect>
        <Box
          height="50%"
          width="1px"
          bg={hasError ? 'error' : 'outline'}
          zIndex={2}
          transform="rotate(10deg)"
        />
        <DateInputSelect
          ref={yearRef}
          name={`${name}-year`}
          value={year}
          disabled={disabled}
          onChange={e => {
            setYear(parseInt(e.target.value, 10));
          }}
          aria-label={`${label}: Year`}
          hasValue={Boolean(year)}
          hasError={hasError}
        >
          <option value="0" disabled selected>
            yyyy
          </option>
          {times(maxYear - minYear + 1, n => minYear + n).map(i => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </DateInputSelect>

        <Box
          className="__bg"
          bg={hasError ? 'error-alpha01' : 'primary-alpha01'}
          position="absolute"
          top="-4px"
          bottom="-4px"
          left="-4px"
          right="-4px"
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
          top="0"
          bottom="0"
          left="0"
          right="0"
          zIndex={0}
          borderRadius="4px"
          transitionProperty="border-color"
          transitionDuration="fast"
          transitionTimingFunction="ease"
        >
          <Box
            aria-hidden="true"
            position="absolute"
            top="0"
            left="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="sm"
            height="100%"
            zIndex={0}
            color={hasError ? 'error' : 'secondary'}
            bg={hasError ? '#FDEBF0' : 'background'}
            borderTopLeftRadius="4px"
            borderBottomLeftRadius="4px"
            borderRight={['1px solid', hasError ? 'error' : 'outline']}
            transitionProperty="border-color, color"
            transitionDuration="fast"
            transitionTimingFunction="ease"
          >
            <Icon name="Calendar" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export function DateInputField({ name, validate, ...rest }: DateInputFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', name]));
        const [year = '', month = '', day = '']: string[] = (
          field.value || ''
        ).split('-');

        return (
          <DateInput
            name={name}
            {...rest}
            initialMonth={month ? parseInt(month, 10) : undefined}
            initialDay={day ? parseInt(day, 10) : undefined}
            initialYear={year ? parseInt(year, 10) : undefined}
            hasError={hasError}
            onUpdate={date => {
              form.setFieldValue(name, date);
            }}
          />
        );
      }}
    </Field>
  );
}

export function DateInputFieldWithLabel(props: { label: string } & DateInputFieldProps) {
  return (
    <>
      <Label htmlFor={props.name}>{props.label}</Label>
      <DateInputField {...props} />
    </>
  );
}
