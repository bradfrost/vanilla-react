import React from 'react';
import TextareaField from './TextareaField';

export default {
  title: 'Molecules/Forms/TextareaField',
  component: TextareaField
};

const Template = args => <TextareaField {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Label' };

export const Optional = Template.bind({});
Optional.args = {
  label: 'Label',
  required: false,
  fieldNote: 'This is a field note.'
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: 'cn-c-textarea-field cn-is-disabled',
  name: 'text-field-1',
  label: 'Label',
  placeholder: 'Placeholder',
  title: 'Please enter the proper text into the field.',
  fieldNote: 'The is a disabled field.',
  disabled: true
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  isError: true,
  fieldNote: 'This is a field with an error.'
};
