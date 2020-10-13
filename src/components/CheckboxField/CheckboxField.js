import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import CheckboxFieldItem from '../CheckboxFieldItem';
import FieldNote from '../FieldNote';
import Icon from '../Icon';
import Legend from '../Legend';
import './CheckboxField.scss';

class CheckboxField extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.fieldNote) {
      this.ariaDescribedBy = this.props.ariaDescribedBy || shortid.generate();
    }
  }

  render() {
    const {
      className,
      variant,
      size,
      id,
      label,
      isError,
      fieldNote,
      disabled,
      required,
      ariaDescribedBy,
      items,
      hideLegend,
      children,
      optionalLabel,
      requiredLabel,
      theme,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-checkbox-field', className, {
      'cn-c-checkbox-field--inline': variant == 'inline',
      'cn-c-checkbox-field--inline-wrap': variant == 'inline-wrap',
      'cn-c-checkbox-field--small': size == 'small',
      'cn-c-checkbox-field--inverted': theme == 'inverted',
      'cn-is-error': isError,
      'cn-is-disabled': disabled
    });

    return (
      <fieldset className={componentClassName} id={id} {...other}>
        <Legend
          className='cn-c-checkbox-field__label'
          hideLegend={hideLegend}
          text={label}
          required={required}
          optionalLabel={optionalLabel}
          requiredLabel={requiredLabel}
          aria-describedby={this.ariaDescribedBy}
        />

        <div className='cn-c-checkbox-field__body'>
          <ul className='cn-c-checkbox-field__list'>
            {children
              ? children
              : items.map((item, index) => {
                  return (
                    <CheckboxFieldItem
                      key={'cn-c-checkbox-field-item' + index}
                      id={item.id}
                      name={item.name}
                      value={item.value}
                      checked={item.checked}
                      disabled={item.disabled}
                      readOnly={item.readOnly}
                      text={item.text}
                      theme={item.theme}
                      onChange={item.onChange}
                    />
                  );
                })}
          </ul>
        </div>
        {fieldNote && (
          <FieldNote
            className='cn-c-checkbox-field__note'
            id={this.ariaDescribedBy}
          >
            {fieldNote}
          </FieldNote>
        )}
      </fieldset>
    );
  }
}

CheckboxField.propTypes = {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Child node(s) that can be nested inside component
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
   * FieldNote
   * Used as helper text or error message
   */
  fieldNote: PropTypes.string,
  /**
   * Toggles the visibility of the form control legend
   */
  hideLegend: PropTypes.bool,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * Array of values to populate CheckboxField. Array must take the appropriate shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      text: PropTypes.string
    })
  ),
  /**
   * HTML label text
   */
  label: PropTypes.string.isRequired,
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
  requiredLabel: PropTypes.string,
  /**
   * Size variations for the CheckboxField
   * - **small** results in a visually smaller CheckboxField
   */
  size: PropTypes.oneOf(['small']),
  /**
   * Theme variations:
   * - **inverted** is for CheckboxFields displayed on a dark background
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * Stylistic variants of the CheckboxField
   * - **inline** places each CheckboxFieldItem beside one another
   * - **inline-wrap** places each CheckboxFieldItem beside one another and allows them to wrap
   */
  variant: PropTypes.oneOf(['inline', 'inline-wrap'])
};

CheckboxField.defaultProps = {
  required: true
};

export default CheckboxField;
