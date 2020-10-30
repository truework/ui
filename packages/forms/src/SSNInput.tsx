import * as React from 'react';
import { Field, FieldProps, FieldInputProps } from 'formik';
import { get } from 'lodash';
import { clean, mask, format } from 'parse-ssn';

import {
  Input,
  InputProps,
  InputFieldProps,
  InputFieldWithLabelProps,
} from './Input';
import { Label } from './Label';

export type SSNProps = {
  onUpdate?(ssn: string): void;
  masker?: string;
  separator?: string;
};
export type SSNInputProps = InputProps &
  SSNProps &
  Partial<Pick<FieldInputProps<string>, 'value'>>;
export type SSNInputFieldProps = InputFieldProps & SSNProps;
export type SSNInputFieldWithLabelProps = InputFieldWithLabelProps & SSNProps;

export function SSNInput(props: SSNInputProps) {
  const { value = '', masker = '*', separator = '-' } = props;

  // if initial value is masked, reset to empty string
  const initialValue = new RegExp(`[^0-9${separator}]`).test(value)
    ? ''
    : clean(value, masker);
  const formattedInitialValue = format(mask(initialValue, masker), separator);

  const [raw, setRaw] = React.useState(initialValue);
  const [formatted, setFormatted] = React.useState(formattedInitialValue);

  const onChange = React.useCallback(
    (e) => {
      e.persist();

      const inputValue = e.target.value;
      const nextChar = inputValue.slice(-1);

      // if a user types a letter, the last character is a formatting
      // character, or we already have a full SSN, just ignore
      if (
        new RegExp(`[^0-9${separator}${masker}]`).test(nextChar) ||
        inputValue.length > 11
      )
        return;

      const cleanedInputValue = clean(inputValue, masker); // masked, no - format
      const rawSSN = clean(raw); // no formatting, just numbers

      // if user deleted a character, remove, otherwise, append
      const next =
        cleanedInputValue.length < rawSSN.length
          ? rawSSN.slice(0, cleanedInputValue.length)
          : new RegExp(`[${separator}${masker}]`).test(nextChar)
          ? rawSSN
          : rawSSN + cleanedInputValue.slice(-1);

      setRaw(next);
      setFormatted(format(mask(next, masker), separator));
    },
    [raw, setRaw, formatted, setFormatted]
  );

  const resetCursor = React.useCallback((e) => {
    e.persist();

    const len = e.target.value.length;

    e.target.setSelectionRange(len, len);
  }, []);

  React.useEffect(() => {
    props.onUpdate && props.onUpdate(raw);
  }, [raw]);

  return (
    <Input
      {...props}
      value={formatted}
      onChange={onChange}
      onFocus={resetCursor}
      onKeyUp={resetCursor}
      onKeyDown={resetCursor}
      onClick={resetCursor}
    />
  );
}

export function SSNInputField({ name, validate, ...rest }: SSNInputFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', name]));

        return (
          <SSNInput
            {...rest}
            {...field}
            hasError={hasError}
            onUpdate={(ssn) => {
              console.log(ssn)
              form.setFieldValue(name, ssn);
            }}
          />
        );
      }}
    </Field>
  );
}

export function SSNInputFieldWithLabel(props: SSNInputFieldWithLabelProps) {
  return (
    <>
      <Label htmlFor={props.name}>{props.label}</Label>
      <SSNInputField {...props} />
    </>
  );
}
