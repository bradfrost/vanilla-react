import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LayoutContainer } from 'design-system-name';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames('atm-c-footer', className, {});
    return (
      <div className={componentClassName} {...other}>
        <LayoutContainer>{children}</LayoutContainer>
      </div>
    );
  }
}

Footer.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default Footer;
