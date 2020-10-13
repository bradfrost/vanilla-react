import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '../../../src';
import './DesignTokens.css';

export class Sizes extends Component {
  render() {
    return (
      <Grid className="sg-border-widths" variant="3up">
        {this.props.listItems.map(function(listItem, index) {
          return (
            <GridItem key={'sizes-' + index}>
              <div
                className="sg-base-unit-demo-box"
                style={{ height: listItem.value, width: listItem.value }}
              />
              <span className="sg-label">
                $size-base-unit = {listItem.value} ={' '}
                {parseFloat(listItem.value) * 16 + 'px'}
              </span>
            </GridItem>
          );
        })}
      </Grid>
    );
  }
}

Sizes.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      comment: PropTypes.string
    })
  ).isRequired
};
