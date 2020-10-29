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
};
export type SSNInputProps = InputProps & SSNProps & Partial<Pick<FieldInputProps<string>, 'value'>>;
export type SSNInputFieldProps = InputFieldProps & SSNProps;
export type SSNInputFieldWithLabelProps = InputFieldWithLabelProps & SSNProps;

export function SSNInput(props: SSNInputProps) {
  const [raw, setRaw] = React.useState('');
  const [formatted, setFormatted] = React.useState(format(mask(props.value || '')));

  const onChange = React.useCallback(
    (e) => {
      e.persist()

      const value = e.target.value

      // if a user types a letter, or the last character is a formatting
      // character, just ignore
      if (/[^0-9-*]/.test(value.slice(-1))) return

      const cleanedInputValue = clean(value, '*'); // masked, no - format
      const rawSSN = clean(raw); // no formatting, just numbers

      // if user deleted a character, remove, otherwise, append
      const next =
        cleanedInputValue.length < rawSSN.length
          ? rawSSN.slice(0, cleanedInputValue.length)
          : rawSSN + cleanedInputValue.slice(-1);

      setRaw(format(next));
      setFormatted(format(mask(next)));
    },
    [raw, setRaw, formatted, setFormatted]
  );

  const resetCursor = React.useCallback((e) => {
    e.persist()

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
