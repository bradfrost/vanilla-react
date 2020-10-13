import React from 'react';
import LogoImage from './LogoImage';

export default {
  title: 'Molecules/Global/LogoImage',
  component: LogoImage
};

const Template = args => <LogoImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
