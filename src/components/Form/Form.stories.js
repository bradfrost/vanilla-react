import React from 'react';
import Form from './Form';
import TextField from '../TextField';
import Button from '../Button';

export default {
  title: 'Organisms/Forms/Form',
  component: Form
};

const Template = args => (
  <Form {...args}>
    <TextField
      label='Field 1'
      id='text-field-1'
      required
      fieldNote="What's this?"
    />
    <TextField label='Field 2' id='text-field-2' required />
    <Button variant='primary' text='Primary Button' />
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
