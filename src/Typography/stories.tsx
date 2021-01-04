/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { theme } from '../theme';
import { Box } from '../Box';
import * as Type from './';

const typeComponents = ['H6', 'H5', 'H4', 'H3', 'H2', 'H1'];

storiesOf('Typography', module).add('All', () => (
  <Box p='xxl'>
    <Type.H1 mb='lg'>Typography</Type.H1>
    <Box p='sm' bg='background' mb='xxl'>
      <pre
        dangerouslySetInnerHTML={{
          __html: `import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
} from '@components/Typography';`,
        }}
      />
    </Box>

    <Box mb='xl'>
      <Type.P>(16px/24px) The quick brown fox jumped over the lazy dog.</Type.P>
      <pre
        dangerouslySetInnerHTML={{
          __html: '&lt;P>(16px/24px) ...&lt;/P>',
        }}
      />
    </Box>

    {theme.fontSizes.map((size, i) => {
      const tag = typeComponents[i];
      // @ts-ignore
      const Heading = Type[tag];
      const lineHeight = theme.lineHeights[i];

      return (
        <Box mb='xl'>
          <Heading>
            ({size}/{lineHeight}) The quick brown fox jumped over the lazy dog.
          </Heading>
          <pre
            dangerouslySetInnerHTML={{
              __html: `&lt;${tag}>(${size}/${lineHeight}) ...&lt;/${tag}>`,
            }}
          />
        </Box>
      );
    })}
  </Box>
));
