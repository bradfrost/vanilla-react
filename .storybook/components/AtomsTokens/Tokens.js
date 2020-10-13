import React, { Component } from 'react';
import { Section } from '../../../src';
import { Colors } from './Colors';
import { BorderWidths } from './BorderWidths';
import { BorderRadius } from './BorderRadius';
import { Sizes } from './Sizes';
import { Shadows } from './Shadows';
import { AnimationDuration } from './AnimationDuration';
import { AnimationTimingFunction } from './AnimationTimingFunction';
import tokens from '../../../src/design-tokens/tokens.yml';

export class Tokens extends Component {
  render() {
    return (
      <div style={{ padding: '1rem 2rem' }}>
        <Section title='Brand Colors' align='center'>
          <Colors listItems={filterTokens(`color-brand`)} />
        </Section>

        <Section title='Neutral Colors' align='center'>
          <Colors listItems={filterTokens(`color-neutral`)} />
        </Section>

        <Section title='Utility Colors' align='center'>
          <Colors listItems={filterTokens(`color-utility`)} />
        </Section>

        <Section title='Size' align='center'>
          <Sizes listItems={filterTokens(`size`)} />
        </Section>

        <Section title='Borders' align='center'>
          <h3 tagName='h3'>Border widths</h3>
          <BorderWidths listItems={filterTokens(`border-width`)} />
          <h3 className='cn-u-margin-top-large'>Border radii</h3>
          <BorderRadius listItems={filterTokens(`border-radius`)} />
        </Section>

        <Section title='Shadows' align='center'>
          <Shadows listItems={filterTokens(`box-shadow`)} />
        </Section>

        <Section title='Animation' align='center'>
          <h3>Animation durations</h3>
          <AnimationDuration listItems={filterTokens(`anim-fade`)} />
          <h3 className='cn-u-margin-top-large'>Animation timing functions</h3>
          <AnimationTimingFunction listItems={filterTokens(`anim-ease`)} />
        </Section>
      </div>
    );
  }
}

function filterTokens(prefix) {
  return Object.entries(tokens.props)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, { value, comment }]) => ({
      name: `$${name}`,
      value,
      comment
    }));
}
