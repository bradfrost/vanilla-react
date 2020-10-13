import React from 'react';
import CheckboxField from './CheckboxField';
import CheckboxFieldItem from '../CheckboxFieldItem';

export default {
  component: CheckboxField,
  title: 'Molecules/Forms/CheckboxField'
};

const Template = args => <CheckboxField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox field',
  items: [
    {
      name: 'checkbox-example',
      text: 'Checkbox 1'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 2'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 3'
    }
  ],
  fieldNote: 'This is a checkbox field'
};

export const DefaultUsingChildren = () => (
  <CheckboxField
    label='Checkbox field using children'
    fieldNote='This is a checkbox field'
  >
    <CheckboxFieldItem
      name='checkbox-example'
      text='Checkbox 1'
      value='checkbox1'
    />
    <CheckboxFieldItem
      name='checkbox-example'
      text='Checkbox 2'
      value='checkbox2'
      checked
    />
    <CheckboxFieldItem
      name='checkbox-example'
      text='Checkbox 3'
      value='checkbox3'
    />
  </CheckboxField>
);

export const Inline = Template.bind({});
Inline.args = {
  label: 'Checkbox field',
  variant: 'inline',
  items: [
    {
      name: 'checkbox-example',
      text: 'Checkbox 1'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 2'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 3'
    }
  ],
  fieldNote: 'This is a checkbox field'
};

export const Required = Template.bind({});
Required.args = {
  label: 'Checkbox field',
  required: true,
  items: [
    {
      name: 'checkbox-example',
      text: 'Checkbox 1'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 2'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 3'
    }
  ],
  fieldNote: 'This is a required field'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Checkbox field',
  disabled: true,
  items: [
    {
      name: 'checkbox-example',
      text: 'Checkbox 1',
      disabled: true
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 2',
      disabled: true
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 3',
      disabled: true
    }
  ],
  fieldNote: 'This is a disabled field'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Checkbox field',
  isError: true,
  items: [
    {
      name: 'checkbox-example',
      text: 'Checkbox 1'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 2'
    },
    {
      name: 'checkbox-example',
      text: 'Checkbox 3'
    }
  ],
  fieldNote: 'This field has an error'
};

export const Inverted = () => (
  <div style={{ backgroundColor: 'black' }}>
    <CheckboxField
      label='Inverted Checkbox field'
      theme='inverted'
      items={[
        {
          name: 'checkboxexample',
          text: 'Checkbox 1',
          value: 'checkbox1',
          theme: 'inverted'
        },
        {
          name: 'checkboxexample',
          text: 'Checkbox 2',
          value: 'checkbox2',
          theme: 'inverted'
        },
        {
          name: 'checkboxexample',
          text: 'Checkbox 3',
          value: 'checkbox3',
          theme: 'inverted'
        }
      ]}
    />
  </div>
);
