import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../Box';
import { A } from './index';
import { H1, P } from '../Typography';

storiesOf('Link', module).add('All', () => (
  <Box p="xxl">
    <H1 mb="xs">Link</H1>
    <P mb="lg">@components/Link</P>

    <A href="https://truework.com" external>
      truework.com
    </A>
  </Box>
));
