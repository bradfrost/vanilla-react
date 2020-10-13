import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FontSizes extends Component {
  render() {
    return (
      <ul>
        {this.props.listItems.map(function(listItem) {
          return (
            <li key={listItem.value} style={{ fontSize: listItem.value }}>
              {listItem.name}: {listItem.value}
            </li>
          );
        })}
      </ul>
    );
  }
}

FontSizes.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      comment: PropTypes.string
    })
  ).isRequired
};
