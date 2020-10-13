import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends React.Component {
  render() {
    const { className, children, theme, align, ...other } = this.props;

    const componentClassName = classnames('cn-c-card', className, {
      'cn-c-card--inverted': theme == 'inverted',
      'cn-c-card--center': align == 'center'
    });

    return (
      <div className={componentClassName} {...other}>
        {children}
      </div>
    );
  }
}

Card.propTypes = {
  /**
   * Align variations for Card
   * - **center** aligns card contents to the center
   */
  align: PropTypes.oneOf(['center']),
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Color theme for the component. "inverted" theme is for use on dark backgrounds
   */
  theme: PropTypes.oneOf(['inverted'])
};

export default Card;
