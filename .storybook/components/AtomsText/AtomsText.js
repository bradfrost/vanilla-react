import React, { Component } from 'react';
import { Paragraph } from './Paragraph';
import { Blockquote } from './Blockquote';
import { Hr } from './Hr';
import { InlineElements } from './InlineElements';
import { OrderedList } from './OrderedList';
import { UnorderedList } from './UnorderedList';

export class AtomsText extends Component {
  render() {
    return (
      <div style={{ padding: '2rem' }}>
        <p>
          This story demonstrates the default <strong>base styles</strong> for
          HTML text elements. These elements are for reference only.
        </p>
        <Paragraph />
        <Hr />
        <InlineElements />
        <Hr />
        <Blockquote />
        <Hr />
        <OrderedList />
        <Hr />
        <UnorderedList />
      </div>
    );
  }
}
