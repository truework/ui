/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik, FormikProps, Form } from 'formik';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { H5 } from '../Typography';

import { Input } from './Input';
import { InputHint } from './InputHint';
import { Textarea } from './Textarea';
import { Select } from './Select';
import { Phone } from './Phone';
import { Radio } from './Radio';
import { Checkbox } from './Checkbox';
import { ErrorMessage } from './ErrorMessage';
import { Toggle } from './Toggle';

const stories = storiesOf('Forms', module);

interface MyFormValues {
  name: string;
}

class TheForm extends React.Component<FormikProps<MyFormValues>> {
  componentDidMount(): void {
    this.props.submitForm();
  }

  render() {
    return (
      <Form>
        <Box mb="sm">
          <Input name="name" label="Name" optional />
        </Box>
        <Box mb="sm">
          <Input
            name="additional_info"
            label="Additional Info"
            showInfoAsTooltip
            info={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                sit mi, <a href="#0">luctus ac</a>, id sed pulvinar. Felis sit
                mi, luctus ac, id sed.
              </span>
            }
          />
        </Box>
        <Box mb="sm">
          <InputHint name="domain" label="Append" append=".bamboohr.com" />
        </Box>
        <Box mb="sm">
          <InputHint name="amount" label="Prepend" prepend="$" />
        </Box>
        <Box mb="sm">
          <Input
            name="has_error"
            label="Required Field"
            validate={(value) => {
              return !value ? 'This field is required' : undefined;
            }}
          />
          <ErrorMessage name="has_error" />
        </Box>
        <Box mb="sm">
          <InputHint
            name="has_error"
            label="Required Field"
            prepend="$"
            validate={(value) => {
              return !value ? 'This field is required' : undefined;
            }}
          />
          <ErrorMessage name="has_error" />
        </Box>
        <Box mb="sm">
          <InputHint
            name="cost"
            label="Append + Prepend"
            append=".00"
            prepend={<Icon name="FileText" />}
          />
        </Box>
        <Box mb="sm">
          <Textarea name="description" label="Description" />
        </Box>
        <Box mb="sm">
          <Input name="disabled_input" label="Disabled Input" disabled />
        </Box>
        <Box mb="sm">
          <Textarea
            name="disabled_textarea"
            label="Disabled Textarea"
            disabled
          />
        </Box>
        <Box mb="sm">
          <Select
            name="disabled_select"
            label="Disabled Select"
            placeholder="Select one"
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
            ]}
            disabled
          />
        </Box>
        <Box mb="sm">
          <InputHint
            name="disabled_input_hit"
            label="Disabled InputHint"
            prepend="$"
            disabled
          />
        </Box>
        <Box mb="sm">
          <Radio
            name="options"
            label="Radio"
            options={[
              { label: 'One', value: 'one' },
              { label: 'Two', value: 'two' },
              { label: 'Three', value: 'three' },
            ]}
          />
        </Box>
        <Box mb="sm" position="relative">
          <Select
            name="type"
            label="Type"
            placeholder="Select one"
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
            ]}
          />
        </Box>
        <Box mb="sm" position="relative">
          <Select
            small
            name="small_type"
            label="Small Type"
            placeholder="Select one"
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
            ]}
          />
        </Box>
        <Box mb="sm">
          <Input small name="disabled_input" label="Small Input" />
        </Box>
        <Box mb="sm">
          <Input hideLabel small name="disabled_input" label="Small Input" />
        </Box>
        <Box mb="sm" position="relative">
          <Phone name="phone" label="Phone Number" />
        </Box>
        <Box mb="sm">
          <Checkbox name="bool" label="Sign up for our newsletter" />
        </Box>
        <Box mb="sm">
          <Box display="flex" alignItems="center">
            <Toggle name="toggle" label="Toggle" />
            <H5 ml="sm">Boolean toggle</H5>
          </Box>
        </Box>
        <Button
          type="submit"
          size="large"
          appearance="primary"
          disabled={!this.props.isValid}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

stories.add('Basic', () => (
  <Box maxWidth="sm" mx="auto" py="xxl">
    <Formik
      initialValues={{ name: '', has_error: '' }}
      onSubmit={(values: MyFormValues, actions: any) => {
        action('submit')(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
      component={TheForm}
    />
  </Box>
));
