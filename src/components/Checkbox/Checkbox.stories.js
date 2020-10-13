import React from 'react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Atoms/Forms/Checkbox'
};

const Template = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
