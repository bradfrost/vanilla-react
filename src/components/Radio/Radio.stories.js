import React from 'react';
import Radio from './Radio';

export default {
  title: 'Atoms/Forms/Radio',
  component: Radio
};

const Template = args => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Radio' };

export const Disabled = Template.bind({});
Disabled.args = { label: 'Radio', disabled: true };
