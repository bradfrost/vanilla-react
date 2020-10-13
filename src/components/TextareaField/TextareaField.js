import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import Textarea from '../Textarea';
import Label from '../Label';
import Icon from '../Icon';
import FieldNote from '../FieldNote';
import './TextareaField.scss';

class TextareaField extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.id || shortid.generate();

    if (this.props.fieldNote) {
      this.ariaDescribedBy = this.props.ariaDescribedBy || shortid.generate();
    }

    this.state = {
      valueLength: null
    };

    this.onChange = this.onChange.bind(this);
  }

  get remainingChars() {
    return this.props.maxLength - this.state.valueLength;
  }

  get isError() {
    return this.props.isError || this.state.valueLength >= this.props.maxLength;
  }

  onChange(e) {
    this.setState({
      valueLength: e.target.value.length
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      className,
      id,
      required,
      label,
      disabled,
      name,
      placeholder,
      readOnly,
      isError,
      fieldNote,
      hideLabel,
      ariaDescribedBy,
      maxLength,
      optionalLabel,
      onChange,
      requiredLabel,
      value,
      focus,
      ...other
    } = this.props;

    let componentClassName = classnames('cn-c-textarea-field', className, {
      'cn-is-error': this.isError
    });

    return (
      <div className={componentClassName}>
        <Label
          className='cn-c-textarea-field__label'
          htmlFor={this.id}
          text={label}
          hideLabel={hideLabel}
          required={required}
          optionalLabel={optionalLabel}
          requiredLabel={requiredLabel}
        />
        <Textarea
          className='cn-c-textarea-field__input'
          id={this.id}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          ariaDescribedBy={this.ariaDescribedBy}
          aria-invalid={!!this.isError}
          onChange={this.onChange}
          maxLength={maxLength}
          {...other}
        >
          {value}
        </Textarea>
        {fieldNote && (
          <FieldNote
            className='cn-c-textarea-field__note'
            id={this.ariaDescribedBy}
          >
            {fieldNote}
          </FieldNote>
        )}
      </div>
    );
  }
}

TextareaField.propTypes = {
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
   * FieldNote
   * Used as helper text or error message
   */
  fieldNote: PropTypes.string,
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel: PropTypes.bool,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * HTML label text
   */
  label: PropTypes.string,
  /**
   * Maximum character count for the texterea. Defining a `maxLength` will trigger the character
   * count functionality
   */
  maxLength: PropTypes.number,
  /**
   * HTML name attribute for the textarea
   */
  name: PropTypes.string,
  /**
   * Function passed down from higher level component
   */
  onChange: PropTypes.func,
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Placeholder attribute for input. Note: placeholder should be used sparingly
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
   * String for the required label to add additional information if needed.
   */
  requiredLabel: PropTypes.string,
  /**
   * The text value of the textarea
   */
  value: PropTypes.string
};

TextareaField.defaultProps = {
  disabled: false,
  required: true,
  focus: false
};

export default TextareaField;
