import React from 'react';
import Grid from './Grid';
import GridItem from '../GridItem';

export default {
  title: 'Molecules/Layout and Containers/Layout Grid',
  component: Grid
};

const Template = args => (
  <Grid {...args}>
    <GridItem>
      <div className='fpo' style={{ marginTop: 0, marginBottom: 0 }}>
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className='fpo' style={{ marginTop: 0, marginBottom: 0 }}>
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className='fpo' style={{ marginTop: 0, marginBottom: 0 }}>
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className='fpo' style={{ marginTop: 0, marginBottom: 0 }}>
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className='fpo' style={{ marginTop: 0, marginBottom: 0 }}>
        Grid Item
      </div>
    </GridItem>
    <GridItem>
      <div className='fpo' style={{ marginTop: 0, marginBottom: 0 }}>
        Grid Item
      </div>
    </GridItem>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};

export const TwoUpGrid = Template.bind({});
TwoUpGrid.args = { variant: '2up' };

export const OneToTwoToFourUpGrid = Template.bind({});
OneToTwoToFourUpGrid.args = { variant: '1-2-4up' };
