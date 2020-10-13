import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ENTER_KEYCODE } from '../../util/keycodes';
import './Radio.scss';

const FOCUSABLE = Symbol('FOCUSABLE');

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.focus && this.props.focus) {
      this[FOCUSABLE].focus();
    }
  }

  onKeyDown(e) {
    // If enter key is pressed, trigger on change event
    if (e.keyCode === ENTER_KEYCODE) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      ariaDescribedBy,
      id,
      name,
      value,
      className,
      checked,
      disabled,
      readOnly,
      onChange,
      tabIndex,
      theme,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-radio', className, {
      'cn-c-radio--inverted': theme == 'inverted'
    });
    return (
      <div className={componentClassName} {...other}>
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          tabIndex={tabIndex}
          className="cn-c-radio__input"
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChange}
          aria-describedby={ariaDescribedBy}
          onKeyDown={this.onKeyDown}
          ref={ref => (this[FOCUSABLE] = ref)}
        />
        <span className="cn-c-radio__custom-radio" />
      </div>
    );
  }
}

Radio.propTypes = {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Toggles whether or not the checkbox is checked or unchecked
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['checkced'])]),
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Disables the field and prevents editing the contents
   */
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['disabled'])
  ]),
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * HTML name attribute for the radio button
   */
  name: PropTypes.string,
  /**
   * Function that fires when field value has changed
   */
  onChange: PropTypes.func,
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly: PropTypes.bool,
  /**
   * Tabindex passed down from RadioFieldItem to add or remove focus capability
   */
  tabIndex: PropTypes.number,
  /**
   * Theme variations:
   * - **inverted** is for Radios displayed on a dark background
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * A string representing the value of the radio button
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Radio.defaultProps = {
  disabled: false,
  focus: false
};

export default Radio;
