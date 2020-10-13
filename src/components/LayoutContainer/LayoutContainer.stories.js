import React from 'react';
import LayoutContainer from './LayoutContainer';

export default {
  title: 'Molecules/Layout and Containers/Layout Container',
  component: LayoutContainer
};

const Template = args => (
  <LayoutContainer {...args}>
    <div class='fpo'>
      A Layout Container caps the width of the content to the maximum width and
      centers the container
    </div>
  </LayoutContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const Narrow = Template.bind({});
Narrow.args = { variant: 'narrow' };
