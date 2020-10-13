import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Radio from '../Radio';
import shortid from 'shortid';

class RadioFieldItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id || shortid.generate();
  }

  render() {
    const {
      className,
      id,
      name,
      value,
      checked,
      onChange,
      disabled,
      readOnly,
      text,
      tabIndex,
      theme,
      focus,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-radio-field__item', className, {
      'cn-c-radio-field__item--inverted': theme == 'inverted'
    });

    return (
      <li className={componentClassName} {...other}>
        <Radio
          id={this.id}
          name={name}
          value={value}
          className='cn-c-radio-field__item-control'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          tabIndex={tabIndex}
          theme={theme}
        />

        <label
          className='cn-c-radio-field__item-label'
          htmlFor={this.id}
          dangerouslySetInnerHTML={{
            __html: text
          }}
        />
      </li>
    );
  }
}

RadioFieldItem.propTypes = {
  /**
   * Toggles whether or not the radio is checked or unchecked
   */
  checked: PropTypes.bool,
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
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * Tabindex passed down to Radio to add or remove focus capability
   */
  tabIndex: PropTypes.number,
  /**
   * The label text for the RadioFieldItem
   */
  text: PropTypes.string,
  /**
   * Theme variations:
   * - **inverted** is for a RadioFieldItem displayed on a dark background
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * A string representing the value of the radio button
   */
  value: PropTypes.string
};

export default RadioFieldItem;
