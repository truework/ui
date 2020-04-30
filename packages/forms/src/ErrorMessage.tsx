import * as React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';
import { Span } from '@truework/ui';

export function ErrorMessage(props: { name: string }) {
  return (
    <FormikErrorMessage
      name={props.name}
      render={(msg) => (
        <Span color="error" fontSize={0}>
          {msg}
        </Span>
      )}
    />
  );
}
