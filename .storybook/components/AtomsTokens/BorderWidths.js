import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '../../../src';
import './DesignTokens.css';

export class BorderWidths extends Component {
  render() {
    return (
      <Grid className="sg-border-widths" variant="3up">
        {this.props.listItems.map(function(listItem, index) {
          return (
            <GridItem key={'border-width-' + index}>
              <div
                className="sg-border-width-demo-box"
                style={{ borderWidth: listItem.value }}
              >
                {listItem.name} = {listItem.value}
              </div>
            </GridItem>
          );
        })}
      </Grid>
    );
  }
}

BorderWidths.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      comment: PropTypes.string
    })
  ).isRequired
};
