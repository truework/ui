/* eslint-disable */
import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../Box'
import { Alert } from '../Alert'
import { GridRow, GridItem } from '../Grid'
import { Icon } from '../Icon'
import { Button } from '../Button'

storiesOf('Alerts', module).add('All', () => (
  <Box>
    <GridRow gutter='sm'>
      <GridItem width={[1, 1, 1, 1 / 2]}>
        <Alert
          appearance='primary'
          type='primary'
          mb='sm'
          icon={<Icon name='Clock' />}
        >
          Verifications for companies like McDonald’s generally take about 1-2
          business days.
        </Alert>
      </GridItem>
      <GridItem width={[1, 1, 1, 1 / 2]}>
        <Alert appearance='secondary' type='secondary' mb='sm'>
          Verifications for companies like McDonald’s generally take about 1-2
          business days. For longer alerts, the component expands naturually,
          and both left and right-side elements remain aligned.
        </Alert>
      </GridItem>
    </GridRow>

    <GridRow gutter='sm'>
      <GridItem width={[1, 1, 1, 1 / 3]}>
        <Alert appearance='primary' type='error' mb='sm'>
          Opps, this is an error message.
        </Alert>
      </GridItem>
      <GridItem width={[1, 1, 1, 2 / 3]}>
        <Alert appearance='primary' type='warning' mb='sm'>
          We recommend uploading a form. Otherwise, your request may be delayed.
        </Alert>
      </GridItem>
    </GridRow>
    <Alert appearance='primary' type='success' mb='sm'>
      Great job! This is a success message.
    </Alert>
    <Alert
      appearance='primary'
      type='error'
      icon={<Icon name='AlertCircle' />}
      mb='sm'
    >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <p>
          Please help us with your request by answering the required questions.
        </p>
        <Button appearance='error' size='small'>
          Respond
        </Button>
      </Box>
    </Alert>

    <Alert
      appearance='primary'
      type='primary'
      mb='sm'
      icon={<Icon name='FileText' />}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        You have a reverification request.
        <Button as='a' href='#' appearance='tertiary' size='small'>
          View Reverification
        </Button>
      </Box>
    </Alert>
  </Box>
))
