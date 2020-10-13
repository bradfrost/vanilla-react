import React from 'react';
import FooterNav from './FooterNav';

export default {
  title: 'Molecules/Navigation/FooterNav',
  component: FooterNav
};

const Template = args => <FooterNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      href: '#',
      text: 'Footer Nav Item 1'
    },
    {
      href: '#',
      text: 'Footer Nav Item 2'
    },
    {
      href: '#',
      text: 'Footer Nav Item 3'
    },
    {
      href: '#',
      text: 'Footer Nav Item 4'
    }
  ]
};
