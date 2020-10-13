import React from 'react';
import Select from './Select';

export default {
  title: 'Atoms/Forms/Select',
  component: Select
};

function handleOnChange() {}

const Template = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: handleOnChange,
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
  ]
};

export const WithOptionGroup = Template.bind({});
WithOptionGroup.args = {
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
      optGroupLabel: 'Group 1',
      optGroupItems: [
        {
          value: 'value-3',
          label: 'Value 3'
        },
        {
          value: 'value-4',
          label: 'Value 4'
        },
        {
          value: 'value-5',
          label: 'Value 5'
        }
      ]
    }
  ]
};
