import * as React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';
import { Span } from '@truework/ui';

export function ErrorMessage({ name }: { name: string }) {
  return (
    <FormikErrorMessage
      name={name}
      render={(error) => (
        <Span color="error" fontSize={0}>
          {error}
        </Span>
      )}
    />
  );
}
