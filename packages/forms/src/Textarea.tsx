import * as React from 'react';
import { Field, FieldProps } from 'formik';
import styled from 'styled-components';
import { get } from 'lodash';
import { Span } from '@truework/ui';

import { BaseLabel } from './BaseLabel';
import { BaseWrapper } from './BaseWrapper';
import { IBaseFormField } from './types';
import * as styles from './styles';

interface IField {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  optional?: boolean;
  disabled?: boolean;
}

const StyledTextarea = styled.textarea<IBaseFormField>`
  ${styles.base}
  ${styles.padding}
  ${styles.border}
  height: auto;
  overflow: auto;
  resize: vertical;
`;

export function Textarea(props: IField) {
  return (
    <Field name={props.name}>
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
              <StyledTextarea
                {...field}
                hasError={hasError}
                id={props.name}
                rows={4}
                placeholder={props.placeholder || props.label}
                disabled={props.disabled}
              />
            </BaseWrapper>
          </div>
        );
      }}
    </Field>
  );
}
