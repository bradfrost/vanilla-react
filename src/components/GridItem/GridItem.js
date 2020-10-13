import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './GridItem.scss';

class GridItem extends React.Component {
  render() {
    const { className, children, span, ...other } = this.props;

    const componentClassName = classnames('cn-l-grid__item', className, {});

    return (
      <div className={componentClassName} {...other}>
        {children}
      </div>
    );
  }
}

GridItem.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Number of grid template columns to span
   */
  span: PropTypes.number
};

export default GridItem;
