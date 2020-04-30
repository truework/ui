/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../Box';
import * as Grid from './';

storiesOf('Grid', module).add('All', () => (
  <Box p="xxl">
    <Grid.Row gutter={['xs', 'sm', 'lg', 'xxl']} flexWrap="wrap">
      <Grid.Item width={[1]}>
        <Box p="med" bg="primary" mb="med" />
      </Grid.Item>
      <Grid.Item width={[1 / 2]}>
        <Box p="med" bg="secondary" mb="med" />
      </Grid.Item>
      <Grid.Item width={[1 / 2]}>
        <Box p="med" bg="secondary" mb="med" />
      </Grid.Item>
      <Grid.Item width={[1 / 3]}>
        <Box p="med" bg="success" mb="med" />
      </Grid.Item>
      <Grid.Item width={[1 / 3]}>
        <Box p="med" bg="success" mb="med" />
      </Grid.Item>
      <Grid.Item width={[1 / 3]}>
        <Box p="med" bg="success" mb="med" />
      </Grid.Item>
    </Grid.Row>

    <Grid.Row gutter={['xxl']}>
      <Grid.Item width={[1 / 3]}>
        <Box p="med" bg="secondary" mb="med" />
      </Grid.Item>
      <Grid.Item>
        <Box p="med" bg="secondary" mb="med" />
      </Grid.Item>
    </Grid.Row>
  </Box>
));
