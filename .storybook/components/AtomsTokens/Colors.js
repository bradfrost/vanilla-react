import React, { Component } from 'react';
import './DesignTokens.css';
import PropTypes from 'prop-types';

export class Colors extends Component {
  render() {
    return (
      <ul className="sg-colors">
        {this.props.listItems.map(function(listItem, index) {
          return (
            <li key={`color-${index}`}>
              <span
                className="sg-swatch"
                style={{ backgroundColor: listItem.value }}
              />
              <span className="sg-label">
                {listItem.name}
                <br /> {listItem.value}
                <br /> {listItem.comment}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

Colors.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      comment: PropTypes.string
    })
  ).isRequired
};
