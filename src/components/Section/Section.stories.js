import React from 'react';
import Section from './Section';

export default {
  title: 'Organisms/Sections/Section',
  component: Section
};

const Template = args => (
  <Section {...args}>
    This is the section body, where you can put any content or include other
    components.
  </Section>
);

export const Default = Template.bind({});
Default.args = { title: 'Section Title' };

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Section Title',
  description: 'This is a description of what the section is'
};

export const WithKicker = Template.bind({});
WithKicker.args = {
  kicker: 'Section kicker',
  title: 'Section Title',
  description: 'This is a description of what the section is'
};

export const Center = Template.bind({});
Center.args = {
  align: 'center',
  title: 'Section Title',
  description: 'This is a description of what the section is'
};
