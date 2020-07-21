import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../Box';
import { A, Link } from './index';
import { theme } from '../theme';
import { H1, P } from '../Typography';
import { MemoryRouter } from 'react-router';

storiesOf('Link', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('All', () => (
    <Box p="xxl">
      <H1 mb="xs">Link</H1>
      <P mb="lg">@components/Link</P>

      <Box>
        <A
          href="https://truework.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          truework.com
        </A>
      </Box>

      <Box>
        <Link to="/">React Router Link</Link>
      </Box>
    </Box>
  ));
