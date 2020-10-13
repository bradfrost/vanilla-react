import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import Select from '../Select';
import Label from '../Label';
import Icon from '../Icon';
import FieldNote from '../FieldNote';
import './SelectField.scss';

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.value || '' };

    this.onChange = this.onChange.bind(this);

    this.id = this.props.id || shortid.generate();
    if (this.props.fieldNote) {
      this.ariaDescribedBy = this.props.ariaDescribedBy || shortid.generate();
    }
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
      id,
      label,
      disabled,
      required,
      ariaDescribedBy,
      isError,
      fieldNote,
      hideLabel,
      onChange,
      optionalLabel,
      requiredLabel,
      items,
      focus,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-select-field', className, {
      'cn-is-error': isError,
      'cn-is-disabled': disabled
    });

    return (
      <div className={componentClassName}>
        <Label
          className='cn-c-select-field__label'
          htmlFor={this.id}
          text={label}
          hideLabel={hideLabel}
          required={required}
          optionalLabel={optionalLabel}
          requiredLabel={requiredLabel}
        />

        <div className='cn-c-select-field__body'>
          <Select
            className='cn-c-select-field__control'
            items={items}
            id={this.id}
            disabled={disabled}
            ariaDescribedBy={this.ariaDescribedBy}
            value={this.state.value}
            required={required}
            onChange={this.onChange}
            {...other}
          />
          <Icon name='caret-down' className='cn-c-select-field__icon' />
        </div>
        {fieldNote && (
          <FieldNote
            className='cn-c-select-field__note'
            id={this.ariaDescribedBy}
          >
            {fieldNote}
          </FieldNote>
        )}
      </div>
    );
  }
}

SelectField.propTypes = {
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
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ).isRequired,
  /**
   * HTML label text
   */
  label: PropTypes.string,
  /**
   * Function that fires when field value has changed
   */
  onChange: PropTypes.func,
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel: PropTypes.string
};

SelectField.defaultProps = {
  required: true
};

export default SelectField;
