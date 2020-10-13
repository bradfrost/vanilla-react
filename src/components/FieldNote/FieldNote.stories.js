import React from 'react';
import FieldNote from './FieldNote';
import TextPassage from '../TextPassage';

export default {
  title: 'Atoms/Forms/FieldNote',
  component: FieldNote
};

const Template = args => <FieldNote {...args}>This is a fieldnote.</FieldNote>;

export const Default = Template.bind({});
Default.args = { text: 'field-1' };

export const WithTextPassage = () => (
  <FieldNote id='field-1' label='Label'>
    <TextPassage size='small'>
      Here is a field note that involves:
      <ul>
        <li>Multiple lines</li>
        <li>Arbitrary HTML text</li>
        <li>
          Even <a href='#'>Text links</a>
        </li>
      </ul>
    </TextPassage>
  </FieldNote>
);
