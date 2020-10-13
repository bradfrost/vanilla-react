import React from 'react';
import PageHeader from './PageHeader';

export default {
  title: 'Molecules/Text/PageHeader',
  component: PageHeader
};

const Template = args => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Page header title' };

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Page header title',
  description:
    'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
};

export const WithKicker = Template.bind({});
WithKicker.args = {
  kicker: 'Kicker above title',
  title: 'Page header title',
  description:
    'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
};

export const Centered = Template.bind({});
Centered.args = {
  align: 'center',
  title: 'Page header title',
  description:
    'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
};
