/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { P, H1 } from '../Typography';
import { Box } from '../Box';
import { Gutter, GutterProps } from './';

const stories = storiesOf('Gutter', module);

function Demo({
  label,
  ...options
}: {
  label: string;
} & Partial<GutterProps>) {
  return (
    <Box mb="lg" border="2px dashed" borderColor="primary">
      <Gutter {...options}>
        <Box p="sm" bg="outline">
          <Gutter>
            <P fontSize={0}>
              <pre style={{ margin: 0 }}>{label}</pre>
            </P>
          </Gutter>
        </Box>
      </Gutter>
    </Box>
  );
}

stories.add(
  'All',
  () => (
    <Box p="xxl">
      <H1 mb="xs">Gutter</H1>
      <P mb="lg">@components/Gutter</P>

      <Demo label="default" />
      <Demo label="size: small" size="small" />
      <Demo label="withVertical" withVertical />
      <Demo label="size: small, withVertical" size="small" withVertical />
      <Demo
        label="withVertical, sizeVertical: small"
        withVertical
        sizeVertical="small"
      />
      <Demo label="custom, px: med, py: sm" px="med" py="sm" />
    </Box>
  ),
  {
    info: { inline: true },
  }
);
