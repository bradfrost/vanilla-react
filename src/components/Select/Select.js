import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Select.scss';

const FOCUSABLE = Symbol('FOCUSABLE');

class Select extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.focus && this.props.focus) {
      this[FOCUSABLE].focus();
    }
  }

  render() {
    const {
      className,
      id,
      multiple,
      disabled,
      value,
      onChange,
      ariaDescribedBy,
      items,
      required,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-select', className, {});

    return (
      <select
        className={componentClassName}
        id={id}
        multiple={multiple}
        disabled={disabled}
        required={required}
        value={value}
        ref={ref => (this[FOCUSABLE] = ref)}
        aria-describedby={ariaDescribedBy}
        onChange={onChange}
        {...other}
      >
        {items.map((item, index) => {
          return item.optGroupLabel ? (
            <optgroup key={`option-${index}`} label={item.optGroupLabel}>
              {item.optGroupItems.map((optGroupItem, index) => {
                return (
                  <option
                    key={`option-group-${index}`}
                    value={optGroupItem.value}
                  >
                    {optGroupItem.label}
                  </option>
                );
              })}
            </optgroup>
          ) : (
            <option key={`option-${index}`} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    );
  }
}

Select.propTypes = {
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
   * The array of items to be passed into the select menu. The array must take on the specified shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),
  /**
   * Toggle multiple select option
   */
  multiple: PropTypes.bool,
  /**
   * Function that fires when field value has changed
   */
  onChange: PropTypes.func,
  /**
   * Option group label for select menus with option groups
   */
  optGroupLabel: PropTypes.string,
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * The HTML value attribute of the select menu
   */
  value: PropTypes.string
};

export default Select;
