import React from 'react';
import RadioFieldItem from './RadioFieldItem';

export default {
  title: 'Molecules/Forms/RadioFieldItem',
  component: RadioFieldItem
};

const Template = args => <RadioFieldItem {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Radio field item' };
