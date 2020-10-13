import React from 'react';
import SelectField from './SelectField';

export default {
  title: 'Molecules/Forms/SelectField',
  component: SelectField
};

const Template = args => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1'
    },
    {
      value: 'value-2',
      label: 'Value 2'
    },
    {
      value: 'value-3',
      label: 'Value 3'
    }
  ],
  fieldNote: 'This is a default select field'
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1'
    },
    {
      value: 'value-2',
      label: 'Value 2'
    },
    {
      value: 'value-3',
      label: 'Value 3'
    }
  ],
  fieldNote: 'This is a required select field'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1'
    },
    {
      value: 'value-2',
      label: 'Value 2'
    },
    {
      value: 'value-3',
      label: 'Value 3'
    }
  ],
  fieldNote: 'This is a disabled select field'
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1'
    },
    {
      value: 'value-2',
      label: 'Value 2'
    },
    {
      value: 'value-3',
      label: 'Value 3'
    }
  ],
  fieldNote: 'This is a field with an error'
};
