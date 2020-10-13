import React from 'react';
import PropTypes from 'prop-types';
import './FooterNav.scss';

class FooterNav extends React.Component {
  render() {
    const { items, ...other } = this.props;
    return (
      <nav className="cn-c-footer-nav" {...other}>
        <ul className="cn-c-footer-nav__list">
          {items.map((item, index) => {
            return (
              <li
                className="cn-c-footer-nav__item"
                key={`cn-c-footer-nav-item-${index}`}
              >
                <a className="cn-c-footer-nav__link" href={item.href}>
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

FooterNav.propTypes = {
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default FooterNav;
