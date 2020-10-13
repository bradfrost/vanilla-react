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

export const Long = Template.bind({});
Long.args = {
  name: 'inlinecheckbox',
  label:
    'Inline checkbox label Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

export const WithLink = Template.bind({});
WithLink.args = {
  name: 'inlinecheckbox',
  label: ['Do you agree to our terms of service?']
};
