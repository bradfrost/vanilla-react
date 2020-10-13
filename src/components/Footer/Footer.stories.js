import React from 'react';
import Footer from './Footer';

export default {
  title: 'Organisms/Global/Footer',
  component: Footer
};

const Template = args => <Footer {...args}>Footer content</Footer>;

export const Default = Template.bind({});
Default.args = {};
