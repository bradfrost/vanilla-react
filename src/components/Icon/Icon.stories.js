import React from 'react';
import Icon from './Icon';

export default {
  title: 'Atoms/Icons/Icon',
  component: Icon
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { name: 'triangle-right' };

export const Inverted = () => (
  <div className="cn-u-padding-large" style={{ background: '#000000' }}>
    <Icon theme="inverted" name="triangle-right" />
  </div>
);
