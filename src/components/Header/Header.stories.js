import React from 'react';
import Header from './Header';

export default {
  title: 'Organisms/Global/Header',
  component: Header
};

const Template = args => <Header {...args}></Header>;

export const Default = Template.bind({});
Default.args = {};
