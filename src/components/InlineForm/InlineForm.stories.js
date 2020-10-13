import React from 'react';
import InlineForm from './InlineForm';

export default {
  title: 'Molecules/Forms/InlineForm',
  component: InlineForm
};

const Template = args => <InlineForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Search',
  method: 'post',
  action: 'http://google.com',
  placeholder: 'Placeholder',
  cta: 'Action'
};
