import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TextInput.scss';

const FOCUSABLE = Symbol('FOCUSABLE');

class TextInput extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.focus && this.props.focus) {
      this[FOCUSABLE].focus();
    }
  }

  render() {
    const {
      ariaDescribedBy,
      className,
      disabled,
      id,
      inputMode,
      maxLength,
      name,
      onChange,
      placeholder,
      readOnly,
      required,
      theme,
      type,
      value,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-text-input', className, {
      'cn-c-text-input--inverted': theme == 'inverted'
    });

    return (
      <input
        className={componentClassName}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        required={required}
        ref={ref => (this[FOCUSABLE] = ref)}
        aria-describedby={ariaDescribedBy}
        {...other}
      />
    );
  }
}

TextInput.propTypes = {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Disables the field and prevents editing the contents
   */
  disabled: PropTypes.bool,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * Gives a hint as to the type of data needed for text input
   */
  inputMode: PropTypes.string,
  /**
   * Max number of characters for the text input
   */
  maxLength: PropTypes.number,
  /**
   * HTML name attribute for the input
   */
  name: PropTypes.string,
  /**
   * Function that fires when field value has changed
   */
  onChange: PropTypes.func,
  /**
   * Placeholder attribute for input. Note: placeholder should be used sparingly
   */
  placeholder: PropTypes.string,
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly: PropTypes.bool,
  /**
   * Available theme variations for the autocomplete
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * HTML type attribute, allowing switching between text, password, and other HTML5 input field types
   */
  type: PropTypes.oneOf([
    'text',
    'password',
    'datetime',
    'datetime-local',
    'date',
    'file',
    'month',
    'time',
    'week',
    'number',
    'email',
    'url',
    'search',
    'tel'
  ]),
  /**
   * The value of the input
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextInput.defaultProps = {
  disabled: false,
  focus: false,
  type: 'text'
};

export default TextInput;
