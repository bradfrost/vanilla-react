import React from 'react';
import GridItem from './GridItem';

export default {
  title: 'Molecules/Layout and Containers/Layout Grid Item',
  component: GridItem
};

const Template = args => (
  <GridItem {...args}>
    <div className='fpo' style={{ marginTop: 0, marginBottom: 0 }}>
      Grid item
    </div>
  </GridItem>
);

export const Default = Template.bind({});
Default.args = {};
