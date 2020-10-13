import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ENTER_KEYCODE } from '../../util/keycodes';
import './Checkbox.scss';

const FOCUSABLE = Symbol('FOCUSABLE');

class Checkbox extends React.Component {
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
      theme,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-checkbox', className, {
      'cn-c-checkbox--inverted': theme == 'inverted'
    });
    return (
      <div className={componentClassName} {...other}>
        <input
          id={id}
          type="checkbox"
          name={name}
          value={value}
          className="cn-c-checkbox__input"
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref => (this[FOCUSABLE] = ref)}
          onChange={onChange}
          aria-describedby={ariaDescribedBy}
          onKeyDown={this.onKeyDown}
        />
        <span className="cn-c-checkbox__custom-check" />
      </div>
    );
  }
}

Checkbox.propTypes = {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Toggles whether or not the checkbox is checked or unchecked
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['checked'])]),
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
   * HTML name attribute for the checkbox
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
   * Theme variations:
   * - **inverted** is for a Checkbox displayed on a dark background
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * A string representing the value of the checkbox
   */
  value: PropTypes.string
};

Checkbox.defaultProps = {
  disabled: false,
  focus: false
};

export default Checkbox;
