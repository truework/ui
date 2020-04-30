/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../Box';
import * as Type from '../Typography';
import { Alert } from '../Alert';
import { Row, Item } from '../Grid';
import { Icon } from '../Icon';
import { Button } from '../Button';

storiesOf('Alerts', module).add('All', () => (
  <Box p="xxl">
    <Type.H1 mb="xs">Alerts</Type.H1>
    <Type.P mb="lg">@components/Alert</Type.P>

    <Row gutter="sm">
      <Item width={[1, 1, 1, 1 / 2]}>
        <Alert
          appearance="primary"
          type="primary"
          mb="sm"
          icon={<Icon name="Clock" />}
        >
          Verifications for companies like McDonald’s generally take about 1-2
          business days.
        </Alert>
      </Item>
      <Item width={[1, 1, 1, 1 / 2]}>
        <Alert appearance="secondary" type="secondary" mb="sm">
          Verifications for companies like McDonald’s generally take about 1-2
          business days. For longer alerts, the component expands naturually,
          and both left and right-side elements remain aligned.
        </Alert>
      </Item>
    </Row>

    <Row gutter="sm">
      <Item width={[1, 1, 1, 1 / 3]}>
        <Alert appearance="primary" type="error" mb="sm">
          Opps, this is an error message.
        </Alert>
      </Item>
      <Item width={[1, 1, 1, 2 / 3]}>
        <Alert appearance="primary" type="warning" mb="sm">
          We recommend uploading a form. Otherwise, your request may be delayed.
        </Alert>
      </Item>
    </Row>
    <Alert appearance="primary" type="success" mb="sm">
      Great job! This is a success message.
    </Alert>
    <Alert appearance="primary" type="error" icon={<Icon name="AlertCircle" />}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <p>
          Please help us with your request by answering the required questions.
        </p>
        <Button appearance="error" size="small">
          Respond
        </Button>
      </Box>
    </Alert>
  </Box>
));
