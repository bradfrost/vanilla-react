import React from 'react';
import TextField from './TextField';
import TextFieldExample from './TextFieldExample';

export default {
  title: 'Molecules/Forms/TextField',
  component: TextField
};

const Template = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'text-field-1',
  label: 'Label',
  type: 'text',
  title: 'Please enter the proper text into the field.',
  fieldNote: 'This is the field note.'
};

export const Optional = Template.bind({});
Optional.args = {
  name: 'text-field-1',
  required: false,
  label: 'Label',
  type: 'text',
  title: 'Please enter the proper text into the field.',
  fieldNote: 'This is a required field'
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'text-field-1',
  disabled: true,
  label: 'Label',
  type: 'text',
  title: 'Please enter the proper text into the field.',
  fieldNote: 'This is a required field'
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  name: 'text-field-1',
  placeholder: 'Placeholder text',
  label: 'Label',
  type: 'text',
  title: 'Please enter the proper text into the field.',
  fieldNote: 'This is a required field'
};

export const Email = Template.bind({});
Email.args = {
  name: 'text-field-1',
  label: 'Label',
  type: 'email',
  title: 'Please enter the proper text into the field.',
  fieldNote: 'This is the field note.'
};

export const Error = Template.bind({});
Error.args = {
  name: 'text-field-1',
  label: 'Label',
  type: 'text',
  placeholder: 'Placeholder',
  title: 'Please enter the proper text into the field.',
  isError: true,
  fieldNote: 'This is a field with an error'
};

export const ErrorNoMessage = Template.bind({});
ErrorNoMessage.args = {
  name: 'text-field-1',
  label: 'Label',
  type: 'text',
  placeholder: 'Placeholder',
  title: 'Please enter the proper text into the field.',
  isError: true
};

export const OnBlur = () => <TextFieldExample />;
