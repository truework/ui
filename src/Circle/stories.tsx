/* eslint-disable */
import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { GridRow, GridItem } from '../Grid'
import { Icon } from '../Icon'
import { Circle } from '../Circle'

storiesOf('Circles', module).add('All', () => (
  <GridRow gutter='sm'>
    <GridItem width={[1, 1, 1, 1 / 2]}>
      <Circle bg='primary' color='white' size={100}>
        Hello
      </Circle>
    </GridItem>
    <GridItem width={[1, 1, 1, 1 / 2]}>
      <Circle bg='primary' color='white' size={100}>
        <Icon name='Heart' />
      </Circle>
    </GridItem>
  </GridRow>
))
