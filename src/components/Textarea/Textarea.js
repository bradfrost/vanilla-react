import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Textarea.scss';

const FOCUSABLE = Symbol('FOCUSABLE');

class Textarea extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.focus && this.props.focus) {
      this[FOCUSABLE].focus();
    }
  }

  render() {
    const {
      children,
      className,
      id,
      name,
      placeholder,
      rows,
      disabled,
      readOnly,
      required,
      ariaDescribedBy,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-textarea', className, {});

    return (
      <textarea
        className={componentClassName}
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        aria-describedby={ariaDescribedBy}
        ref={ref => (this[FOCUSABLE] = ref)}
        {...other}
      >
        {children}
      </textarea>
    );
  }
}

Textarea.propTypes = {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * The text content of the textarea
   */
  children: PropTypes.node,
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
   * HTML name attribute for the textarea
   */
  name: PropTypes.string,
  /**
   * Placeholder attribute for textarea. Note: placeholder should be used sparingly
   */
  placeholder: PropTypes.string,
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly: PropTypes.bool,
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * The number of visible text lines for the control
   */
  rows: PropTypes.number
};

Textarea.defaultProps = {
  disabled: false,
  rows: 5
};

export default Textarea;
