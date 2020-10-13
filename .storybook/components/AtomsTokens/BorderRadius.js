import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '../../../src';
import './DesignTokens.css';

export class BorderRadius extends Component {
  render() {
    return (
      <Grid className="sg-border-widths" variant="3up">
        {this.props.listItems.map(function(listItem, index) {
          return (
            <GridItem key={'border-radius-' + index}>
              <div
                className="sg-border-width-demo-box"
                style={{ borderRadius: listItem.value }}
              >
                $border-width = {listItem.value}
              </div>
            </GridItem>
          );
        })}
      </Grid>
    );
  }
}

BorderRadius.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      comment: PropTypes.string
    })
  ).isRequired
};
