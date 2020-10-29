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

      const val = clean(e.target.value, '*'); // no formatting
      const prev = clean(raw); // no formatting

      const next =
        val.length < prev.length
          ? prev.slice(0, val.length)
          : prev + val.slice(-1);

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
