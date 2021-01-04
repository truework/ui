/* eslint-disable */
import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../Box'
import { GridRow, GridItem } from './'

storiesOf('Grid', module).add('All', () => (
  <Box p='xxl'>
    <GridRow gutter={['xs', 'sm', 'lg', 'xxl']} flexWrap='wrap'>
      <GridItem width={[1]}>
        <Box p='med' bg='primary' mb='med' />
      </GridItem>
      <GridItem width={[1 / 2]}>
        <Box p='med' bg='secondary' mb='med' />
      </GridItem>
      <GridItem width={[1 / 2]}>
        <Box p='med' bg='secondary' mb='med' />
      </GridItem>
      <GridItem width={[1 / 3]}>
        <Box p='med' bg='success' mb='med' />
      </GridItem>
      <GridItem width={[1 / 3]}>
        <Box p='med' bg='success' mb='med' />
      </GridItem>
      <GridItem width={[1 / 3]}>
        <Box p='med' bg='success' mb='med' />
      </GridItem>
    </GridRow>

    <GridRow gutter={['xxl']}>
      <GridItem width={[1 / 3]}>
        <Box p='med' bg='secondary' mb='med' />
      </GridItem>
      <GridItem>
        <Box p='med' bg='secondary' mb='med' />
      </GridItem>
    </GridRow>
  </Box>
))
