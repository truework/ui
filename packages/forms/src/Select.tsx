import * as React from 'react';
import { Field, FieldProps } from 'formik';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { Box, Span, Icon } from '@truework/ui';

import { BaseLabel } from './BaseLabel';
import { BaseWrapper } from './BaseWrapper';
import { IBaseFormField } from './types';
import * as styles from './styles';

interface IOption {
  value: string;
  label: string;
}

interface IField {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  validate?: (value: any) => string | Promise<any> | undefined;
  onBlur?: (e: React.FocusEvent<any>) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  options: IOption[];
  optional?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  small?: boolean;
}

const StyledSelect = styled.select<IBaseFormField>(
  ({ theme, small }) => css`
  ${styles.base}
  ${styles.padding}
  ${styles.border}
  color: ${theme.colors.secondary};
  font-weight: 500;

  &::-ms-expand {
    display: none;
  }
  &:not(:disabled):active,
  &:not(:disabled):focus,
  &:not(:disabled):hover {
    outline: 0;
    color: ${theme.colors.body};
  }

  ${
    small &&
    `
      height: 36px;
      padding: 0px 32px 0 16px;
      margin-right: 16px;
      font-size: ${theme.fontSizes[0]};
      line-height: ${theme.lineHeights[0]};
    `
  }
 `
);

export function Select(props: IField) {
  return (
    <Field name={props.name} validate={props.validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', field.name]));
        const handleBlur = (e: React.FocusEvent<any>) => {
          field.onBlur(e);
          if (props.onBlur !== undefined) {
            props.onBlur(e);
          }
        };
        const handleChange = (e: React.ChangeEvent<any>) => {
          field.onChange(e);
          if (props.onChange !== undefined) {
            props.onChange(e);
          }
        };

        return (
          <div>
            {!props.hideLabel && (
              <BaseLabel // eslint-disable-line jsx-a11y/label-has-for
                htmlFor={props.name}
              >
                {props.label}
                {props.optional && (
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
            )}

            <BaseWrapper hasError={hasError}>
              <StyledSelect
                {...field}
                value={
                  props.placeholder && !field.value
                    ? 'placeholder'
                    : field.value
                }
                onBlur={handleBlur}
                onChange={handleChange}
                hasError={hasError}
                id={props.name}
                defaultValue={props.placeholder ? 'placeholder' : field.value}
                disabled={props.disabled}
                aria-label={props.label}
                small={props.small}
              >
                {props.options.reduce(
                  (options: React.ReactElement[], option: IOption) => {
                    return options.concat(
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  },
                  props.placeholder
                    ? [
                        <option key="placeholder" value="placeholder" disabled>
                          {props.placeholder}
                        </option>,
                      ]
                    : []
                )}
              </StyledSelect>

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
            </BaseWrapper>
          </div>
        );
      }}
    </Field>
  );
}
