import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Logo from '../Logo';
import PrimaryNav from '../PrimaryNav';
import './Header.scss';

class Header extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames('cn-c-header', className, {});
    return (
      <div className={componentClassName} {...other}>
        <div className="cn-c-header__inner">
          <Logo />
          <PrimaryNav
            items={[
              {
                href: '#',
                text: 'Nav Item'
              },
              {
                href: '#',
                text: 'Nav Item'
              },
              {
                href: '#',
                text: 'Nav Item'
              }
            ]}
          />
          {children}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default Header;
