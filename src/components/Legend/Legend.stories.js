import React from 'react';
import Legend from './Legend';

export default {
  title: 'Atoms/Forms/Legend',
  component: Legend
};

const Template = args => <Legend {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Legend', required: true };

export const Optional = Template.bind({});
Optional.args = { text: 'Legend', required: false };
