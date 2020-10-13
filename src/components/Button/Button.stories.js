import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Molecules/Buttons/Button'
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Button' };

export const DefaultWithIconBefore = Template.bind({});
DefaultWithIconBefore.args = {
  iconPosition: 'before',
  iconName: 'caret-left',
  text: 'Button'
};

export const DefaultWithIconAfter = Template.bind({});
DefaultWithIconAfter.args = {
  iconPosition: 'after',
  iconName: 'caret-right',
  text: 'Button'
};

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', text: 'Primary Button' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, text: 'Disabled Button' };

export const TextLinkButton = Template.bind({});
TextLinkButton.args = { variant: 'link', text: 'Text Link Button' };

export const TextLinkWithIcon = Template.bind({});
TextLinkWithIcon.args = {
  variant: 'link',
  text: 'Text Link Button',
  iconPosition: 'after',
  iconName: 'triangle-right'
};
