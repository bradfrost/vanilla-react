import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class CardHeader extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames('cn-c-card__header', className, {});

    return (
      <div className={componentClassName} {...other}>
        {children}
      </div>
    );
  }
}

CardHeader.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default CardHeader;
