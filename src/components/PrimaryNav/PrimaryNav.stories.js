import React from 'react';
import PrimaryNav from './PrimaryNav';

export default {
  title: 'Molecules/Navigation/PrimaryNav',
  component: PrimaryNav
};

const Template = args => <PrimaryNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      tag: 'a',
      href: '#',
      text: 'Nav item 1'
    },
    {
      tag: 'a',
      href: '#',
      text: 'Nav item 2'
    },
    {
      tag: 'a',
      href: '#',
      text: 'Nav item 3'
    }
  ]
};
