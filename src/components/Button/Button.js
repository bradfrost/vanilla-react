import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './Button.scss';

class Button extends React.Component {
  render() {
    const {
      className,
      variant,
      theme,
      disabled,
      fullWidth,
      iconName,
      iconPosition,
      screenReaderText,
      buttonRef,
      href,
      text,
      type,
      hideText,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-btn', className, {
      'cn-c-btn--primary': variant == 'primary',
      'cn-c-btn--link': variant == 'link',
      'cn-c-btn--inverted': theme == 'inverted',
      'cn-c-btn--block': fullWidth
    });

    const TagName = href ? 'a' : 'button';
    return (
      <TagName
        className={componentClassName}
        href={href}
        disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        ref={buttonRef}
        type={type}
        {...other}
      >
        {iconPosition === 'before' && (
          <Icon
            aria-hidden='true'
            focusable='false'
            name={iconName}
            className='cn-c-btn__icon'
          />
        )}
        {text && (
          <span
            className={
              !hideText ? 'cn-c-btn__text' : 'cn-c-btn__text cn-u-is-vishidden'
            }
          >
            {text}
            {screenReaderText && (
              <span className='cn-u-is-vishidden'>{screenReaderText}</span>
            )}
          </span>
        )}
        {iconPosition === 'after' && (
          <Icon
            aria-hidden='true'
            focusable='false'
            name={iconName}
            className='cn-c-btn__icon'
          />
        )}
      </TagName>
    );
  }
}

Button.propTypes = {
  /**
   * Reference to the button DOM node
   */
  buttonRef: PropTypes.func,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Disables the field and prevents editing the contents
   */
  disabled: PropTypes.bool,
  /**
   * Toggles button that fills the full width of its container
   */
  fullWidth: PropTypes.bool,
  /**
   * Visually hide button text (but text is still accessible to assistive technology)
   */
  hideText: PropTypes.bool,
  /**
   * Link to URL. If href is present, the button will be rendered as an <a> element.
   */
  href: PropTypes.PropTypes.string,
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName: PropTypes.string,
  /**
   * Determines position of icon relative to button text.
   * - **before** places icon before button text
   * - **after** places icon after button text
   */
  iconPosition: PropTypes.oneOf(['before', 'after']),
  /**
   * Visually hidden additional instruction text to help provide screen reader users additional context. For instance, "View details" might be the visible button text, but screenReaderText might add additional instructions such as "for confirmation number C1234567"
   */
  screenReaderText: PropTypes.string,
  /**
   * The visible button text
   */
  text: PropTypes.string.isRequired,
  /**
   * Available theme variations for the button
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * Determines type of button
   * - **button** The button is a clickable button.
   * - **submit** The button is a submit button (submits form data). This is the default `button` behavior
   * - **reset** The button is a reset button (resets the form-data to its initial values)
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Available _stylistic_ variations available for the Button component
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'bare',
    'link',
    'ghost'
  ])
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  hideText: false
};

export default Button;
