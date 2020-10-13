import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '../../../src';
import './DesignTokens.css';

export class AnimationDuration extends Component {
  render() {
    return (
      <Grid className="sg-border-widths" variant="3up">
        {this.props.listItems.map(function(listItem, index) {
          return (
            <GridItem key={'animation-duration-' + index}>
              <div
                className="sg-animation-demo-box"
                style={{ transitionDuration: listItem.value }}
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

AnimationDuration.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      comment: PropTypes.string
    })
  ).isRequired
};
