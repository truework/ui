import * as React from 'react';
import { Field, FieldProps } from 'formik';
import styled from 'styled-components';
import { get } from 'lodash';
import { Box, Span } from '@truework/ui';

import { BaseLabel } from './BaseLabel';
import { BaseWrapper } from './BaseWrapper';
import { BaseInput } from './BaseInput';
import { IBaseFormField } from './types';
import * as styles from './styles';

interface IField {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  optional?: boolean;
  validate?: (value: any) => string | Promise<any> | undefined;
  append?: string | React.ReactElement;
  prepend?: string | React.ReactElement;
  disabled?: boolean;
}

interface IStyledInput extends IBaseFormField {
  hasAppendedContent?: boolean;
  hasPrependedContent?: boolean;
}

export const StyledInput = styled(BaseInput)<IStyledInput>`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;

  ${(props) =>
    props.hasPrependedContent &&
    `
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left: 0;
    `};
  ${(props) =>
    props.hasAppendedContent &&
    `
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-right: 0;
    `};

  &:not(:disabled):focus ~ div,
  &:not(:disabled):hover ~ div {
    outline: 0;
    border-color: ${(props) =>
      props.hasError ? props.theme.colors.error : props.theme.colors.primary};
  }
  &:disabled ~ div {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Hint = styled.div`
  ${styles.border};
  padding: 0 ${(props) => props.theme.space.sm};
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[1]};
  pointer-events: none;
  background-color: ${(props) =>
    props.hasError ? '#FDEBF0' : props.theme.colors.background};
  color: ${(props) =>
    props.hasError ? props.theme.colors.error : props.theme.colors.body};
  &:focus ~ div,
  &:hover ~ div {
    outline: 0;
    border-color: ${(props) =>
      props.hasError ? props.theme.colors.error : props.theme.colors.primary};
  }
`;

const Prepend = styled(Hint)`
  order: -1;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

const Append = styled(Hint)`
  order: 2;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

export function InputHint(props: IField) {
  return (
    <Field name={props.name} validate={props.validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', field.name]));

        return (
          <div>
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

            <BaseWrapper hasError={hasError}>
              <Box display="flex" width="100%">
                <StyledInput
                  {...field}
                  hasError={hasError}
                  id={props.name}
                  type={props.type || 'text'}
                  placeholder={
                    props.placeholder !== undefined
                      ? props.placeholder
                      : props.label
                  }
                  hasAppendedContent={Boolean(props.append)}
                  hasPrependedContent={Boolean(props.prepend)}
                  disabled={props.disabled}
                />
                {props.prepend && (
                  <Prepend aria-hidden="true" hasError={hasError}>
                    {props.prepend}
                  </Prepend>
                )}
                {props.append && (
                  <Append aria-hidden="true" hasError={hasError}>
                    {props.append}
                  </Append>
                )}
              </Box>
            </BaseWrapper>
          </div>
        );
      }}
    </Field>
  );
}
