import React from 'react';
import InlineCheckbox from './InlineCheckbox';

export default {
  title: 'Molecules/Forms/InlineCheckbox',
  component: InlineCheckbox
};

function handleOnChange(e) {
  console.log('e.target.checked is ' + e.target.checked);
}

const Template = args => <InlineCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'inlinecheckbox',
  label: 'Inline checkbox label',
  onChange: handleOnChange
};
