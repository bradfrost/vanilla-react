import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

class PrimaryNavItem extends React.Component {
  render() {
    const {
      className,
      tagName,
      text,
      href,
      items,
      closeMenu,
      iconName,
      onClick,
      ...other
    } = this.props;

    const componentClassName = classnames(
      'cn-c-primary-nav__item',
      className,
      {}
    );

    const TagName = tagName;
    return (
      <li className={componentClassName} {...other}>
        <TagName
          className="cn-c-primary-nav__link"
          href={href}
          onClick={onClick}
        >
          <span className="cn-c-primary-nav__text">{text}</span>
          {items && (
            <Icon
              aria-hidden="true"
              focusable="false"
              name={iconName}
              className="cn-c-primary-nav__icon"
            />
          )}
        </TagName>
      </li>
    );
  }
}

PrimaryNavItem.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Close menu function
   */
  closeMenu: PropTypes.func,
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href: PropTypes.string,
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName: PropTypes.string,
  /**
   * Array of items to be passed to MegaM
   */
  items: PropTypes.array,
  /**
   * Click handler for PrimaryNavItem
   */
  onClick: PropTypes.func,
  /**
   * Tag name for nav item. Defaults to `a` tagName, but could also be a `button`
   */
  tagName: PropTypes.string,
  /**
   * Link text string
   */
  text: PropTypes.string
};

PrimaryNavItem.defaultProps = {
  tagName: 'a'
};

export default PrimaryNavItem;
