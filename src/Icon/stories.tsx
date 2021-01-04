/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../Box';
import { H1, H6 } from '../Typography';

import { Icon } from './';

function Row({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) {
  return (
    <Box display="flex" flexWrap="wrap" width="100%" mx="-0.5em">
      {children}
    </Box>
  );
}

function RowItem({ name, children }: any) {
  return (
    <Box display="flex" width={[1 / 4, 1 / 6, 1 / 8]} px="0.5em" mb="1em">
      <Box mb="lg" width="100%">
        <Box display="flex" justifyContent="center" width="100%">
          {children}
        </Box>
        <H6 mt="sm" fontFamily="monospace" textAlign="center">
          {name}
        </H6>
      </Box>
    </Box>
  );
}

storiesOf('Icons', module).add('All', () => (
  <Box p="xxl">
    <H1 mb="lg">Icons</H1>

    <Row>
      <RowItem name="Arrow">
        <Icon name="ArrowUp" mx="xs" color="primary" />
        <Icon name="ArrowDown" mx="xs" color="primary" />
        <Icon name="ArrowLeft" mx="xs" color="primary" />
        <Icon name="ArrowRight" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="FileText">
        <Icon name="FileText" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Chevron">
        <Icon name="ChevronUp" mx="xs" color="primary" />
        <Icon name="ChevronDown" mx="xs" color="primary" />
        <Icon name="ChevronLeft" mx="xs" color="primary" />
        <Icon name="ChevronRight" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Check">
        <Icon name="Check" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="CircleCheckFull">
        <Icon name="CircleCheckFull" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Loading">
        <Icon name="Loading" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Circle">
        <Icon name="Circle" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Info">
        <Icon name="Info" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="AlertTriangle">
        <Icon name="AlertTriangle" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="AlertCircle">
        <Icon name="AlertCircle" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Clock">
        <Icon name="Clock" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="AlignLeft">
        <Icon name="AlignLeft" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="AlignCenter">
        <Icon name="AlignCenter" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="AlignRight">
        <Icon name="AlignRight" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Maximize">
        <Icon name="Maximize" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Minimize">
        <Icon name="Minimize" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Delete">
        <Icon name="Delete" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="RefreshCw">
        <Icon name="RefreshCw" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Search">
        <Icon name="Search" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="FilePlus">
        <Icon name="FilePlus" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Menu">
        <Icon name="Menu" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="User">
        <Icon name="User" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Pencil">
        <Icon name="Pencil" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Download">
        <Icon name="Download" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Clipboard">
        <Icon name="Clipboard" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Trash">
        <Icon name="Trash" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Megaphone">
        <Icon name="Megaphone" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Eye">
        <Icon name="Eye" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="EyeOff">
        <Icon name="EyeOff" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Activity">
        <Icon name="Activity" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="Send">
        <Icon name="Send" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="UserCheck">
        <Icon name="UserCheck" mx="xs" color="primary" />
      </RowItem>

      <RowItem name="CreditCard">
        <Icon name="CreditCard" mx="xs" color="primary" />
      </RowItem>
    </Row>
  </Box>
));
