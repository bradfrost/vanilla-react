import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import Label from '../Label';
import TextInput from '../TextInput';
import Icon from '../Icon';
import Button from '../Button';
import FieldNote from '../FieldNote';
import './TextField.scss';

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value ? this.props.value : ''
    };

    this.id = this.props.id || shortid.generate();
    if (this.props.fieldNote) {
      this.ariaDescribedBy = this.props.ariaDescribedBy || shortid.generate();
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
      return;
    }
    this.setState({ value: e.target.value });
  }

  render() {
    const {
      className,
      type,
      id,
      required,
      label,
      disabled,
      fieldNote,
      fieldButtonText,
      fieldButtonScreenReaderText,
      fieldButtonOnClick,
      focus,
      name,
      placeholder,
      readOnly,
      iconName,
      onChange,
      hideLabel,
      maxLength,
      inputMode,
      characterSize,
      ariaDescribedBy,
      isError,
      optionalLabel,
      requiredLabel,
      ...other
    } = this.props;

    let componentClassName = classnames('cn-c-textfield', className, {
      'cn-is-error': isError,
      'cn-is-disabled': disabled
    });

    return (
      <div className={componentClassName}>
        <Label
          className='cn-c-textfield__label'
          htmlFor={this.id}
          text={label}
          hideLabel={hideLabel}
          required={required}
          optionalLabel={optionalLabel}
          requiredLabel={requiredLabel}
        />

        <div className='cn-c-textfield__body'>
          <TextInput
            className='cn-c-textfield__input'
            type={type}
            id={this.id}
            name={name}
            value={this.state.value}
            placeholder={placeholder}
            onChange={this.onChange}
            size={characterSize}
            inputMode={inputMode}
            maxLength={maxLength}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            ariaDescribedBy={this.ariaDescribedBy}
            aria-invalid={!!isError}
            {...other}
          />
          {fieldButtonText && (
            <Button
              className='cn-c-textfield__btn'
              type='button'
              text={fieldButtonText}
              screenReaderText={fieldButtonScreenReaderText}
              variant='bare'
              size='small'
              onClick={fieldButtonOnClick}
            />
          )}
          {iconName && (
            <Icon className='cn-c-textfield__icon' name={iconName} />
          )}
        </div>
        {fieldNote && (
          <FieldNote className='cn-c-textfield__note' id={this.ariaDescribedBy}>
            {fieldNote}
          </FieldNote>
        )}
      </div>
    );
  }
}

TextField.propTypes = {
  /**
   * Aria-describedby id string
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Size of the characters for the text input
   */
  characterSize: PropTypes.number,
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
   * Screen reader text used for the button alongside the input field (i.e. show/hide password button)
   */
  fieldButtonScreenReaderText: PropTypes.string,
  /**
   * Text used for the button alongside the input field (i.e. show/hide password button)
   */
  fieldButtonText: PropTypes.string,
  /**
   * Function passed down from higher level component to trigger on click function of text field button
   */
  fieldButtonOnClick: PropTypes.func,
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * Gives a hint as to the type of data needed for text input
   */
  inputMode: PropTypes.string,
  /**
   * HTML label text
   */
  label: PropTypes.string,
  /**
   * Max number of characters for the text input
   */
  maxLength: PropTypes.number,
  /**
   * HTML name attribute for the input
   */
  name: PropTypes.string,
  /**
   * Function that runs on change of the input
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
   * HTML type attribute, allowing switching between text, password, and other HTML5 input field types
   */
  type: PropTypes.oneOf([
    'text',
    'password',
    'datetime',
    'datetime-local',
    'date',
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
   * Value passed down from higher levels for initial state
   */
  value: PropTypes.string
};

TextField.defaultProps = {
  required: true
};

export default TextField;
