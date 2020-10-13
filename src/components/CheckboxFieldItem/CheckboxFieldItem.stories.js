import React from 'react';
import CheckboxFieldItem from './CheckboxFieldItem';

export default {
  title: 'Molecules/Forms/CheckboxFieldItem',
  component: CheckboxFieldItem
};

const Template = args => <CheckboxFieldItem {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Checkbox field item' };
