import React from 'react';
import Label from './Label';

export default {
  title: 'Atoms/Forms/Label',
  component: Label
};

const Template = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Label', required: true };

export const Optional = Template.bind({});
Optional.args = { text: 'Label', required: false };
