import React from 'react';
import Hero from './Hero';
import TextPassage from '../TextPassage';

export default {
  title: 'Molecules/Blocks/Hero',
  component: Hero
};

const Template = args => (
  <Hero {...args}>
    <TextPassage>This is the hero description</TextPassage>
  </Hero>
);

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://via.placeholder.com/1200x650',
  imgAlt: 'Hero Alt Txt',
  title: 'Hero Title',
  description: 'This is the hero description'
};
