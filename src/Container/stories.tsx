/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../Box';
import { Container } from '../Container';
import { theme, Sizes } from '../theme';

storiesOf('Container', module).add('All', () => (
  <Box>
    {Object.keys(theme.sizes).map((key: keyof Sizes) => {
      return (
        <Box mb='xxl'>
          <Container key={key} size={key}>
            <Box bg='primary' color='white' p='sm'>
              {key}
            </Box>
          </Container>
        </Box>
      );
    })}
  </Box>
));
