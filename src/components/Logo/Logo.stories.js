import React from 'react';
import Logo from './Logo';

export default {
  title: 'Molecules/Global/Logo',
  component: Logo
};

const Template = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = { href: '#' };
