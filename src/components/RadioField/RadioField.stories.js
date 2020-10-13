import React from 'react';
import RadioField from './RadioField';
import RadioFieldItem from '../RadioFieldItem';

export default {
  title: 'Molecules/Forms/RadioField',
  component: RadioField
};

const Template = args => <RadioField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio field',
  fieldNote: 'This is a radio field',
  items: [
    {
      value: 'radio1',
      name: 'radio-example',
      text: 'Radio 1'
    },
    {
      value: 'radio2',
      name: 'radio-example',
      text: 'Radio 2'
    },
    {
      value: 'radio3',
      name: 'radio-example',
      text: 'Radio 3'
    }
  ]
};

export const DefaultUsingChildren = () => (
  <RadioField label='Radio field' fieldNote='This is a radio field'>
    <RadioFieldItem
      checked
      name='radio-example'
      text='Radio 1'
      value='radio1'
    />
    <RadioFieldItem name='radio-example' text='Radio 2' value='radio2' />
    <RadioFieldItem name='radio-example' text='Radio 3' value='radio3' />
  </RadioField>
);

export const Inline = Template.bind({});
Inline.args = {
  label: 'Radio field',
  variant: 'inline',
  fieldNote: 'This is a radio field',
  items: [
    {
      value: 'radio1',
      name: 'radio-example',
      text: 'Radio 1'
    },
    {
      value: 'radio2',
      name: 'radio-example',
      text: 'Radio 2'
    },
    {
      value: 'radio3',
      name: 'radio-example',
      text: 'Radio 3'
    }
  ]
};

export const Required = Template.bind({});
Required.args = {
  label: 'Radio field',
  required: true,
  fieldNote: 'This is a radio field',
  items: [
    {
      value: 'radio1',
      name: 'radio-example',
      text: 'Radio 1'
    },
    {
      value: 'radio2',
      name: 'radio-example',
      text: 'Radio 2'
    },
    {
      value: 'radio3',
      name: 'radio-example',
      text: 'Radio 3'
    }
  ]
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Radio field',
  disabled: true,
  fieldNote: 'This is a disabled radio field',
  items: [
    {
      value: 'radio1',
      name: 'radio-example',
      text: 'Radio 1',
      disabled: true
    },
    {
      value: 'radio2',
      name: 'radio-example',
      text: 'Radio 2',
      disabled: true
    },
    {
      value: 'radio3',
      name: 'radio-example',
      text: 'Radio 3',
      disabled: true
    }
  ]
};

export const Error = Template.bind({});
Error.args = {
  label: 'Radio field',
  isError: true,
  fieldNote: 'This is a field with an error',
  items: [
    {
      value: 'radio1',
      name: 'radio-example',
      text: 'Radio 1'
    },
    {
      value: 'radio2',
      name: 'radio-example',
      text: 'Radio 2'
    },
    {
      value: 'radio3',
      name: 'radio-example',
      text: 'Radio 3'
    }
  ]
};

export const Inverted = () => (
  <div style={{ backgroundColor: 'black' }}>
    <RadioField
      label='Inverted Radio field'
      className='cn-c-radio-field'
      theme='inverted'
      items={[
        {
          name: 'radioexample',
          text: 'Radio 1',
          value: 'radio1',
          theme: 'inverted'
        },
        {
          name: 'radioexample',
          text: 'Radio 2',
          value: 'radio2',
          theme: 'inverted'
        },
        {
          name: 'radioexample',
          text: 'Radio 3',
          value: 'radio3',
          theme: 'inverted'
        }
      ]}
    />
  </div>
);
