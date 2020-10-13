import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '../../../src';
import './DesignTokens.css';

export class AnimationTimingFunction extends Component {
  render() {
    return (
      <Grid className="sg-border-widths" variant="3up">
        {this.props.listItems.map(function(listItem, index) {
          return (
            <GridItem key={'animation-' + index}>
              <div
                className="sg-animation-demo-box"
                style={{
                  transitionTimingFunction: listItem.value,
                  transitionDuration: '0.2s'
                }}
              />
              <span className="sg-label">
                {listItem.name} = {listItem.value}
              </span>
            </GridItem>
          );
        })}
      </Grid>
    );
  }
}

AnimationTimingFunction.propTypes = {
  listItems: PropTypes.array.isRequired
};
