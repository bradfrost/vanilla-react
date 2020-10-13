import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from '../Checkbox';
import shortid from 'shortid';

class CheckboxFieldItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxChecked: this.props.checked ? this.props.checked : false
    };
    this.id = this.props.id || shortid.generate();

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checkboxChecked: this.props.checked });
    }
  }

  onChange(e) {
    this.setState({
      checkboxChecked: !this.state.checkboxChecked
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      className,
      id,
      name,
      value,
      disabled,
      readOnly,
      text,
      itemAfter,
      theme,
      focus,
      ...other
    } = this.props;

    const componentClassName = classnames(
      'cn-c-checkbox-field__item',
      className,
      { 'cn-c-checkbox-field__item--inverted': theme == 'inverted' }
    );

    return (
      <li className={componentClassName} {...other}>
        <Checkbox
          id={this.id}
          name={name}
          value={value}
          className='cn-c-checkbox-field__item-control'
          checked={this.state.checkboxChecked}
          onChange={this.onChange}
          disabled={disabled}
          readOnly={readOnly}
          theme={theme}
        />
        <label
          className='cn-c-checkbox-field__item-label'
          htmlFor={this.id}
          dangerouslySetInnerHTML={{
            __html: text
          }}
        />
      </li>
    );
  }
}

CheckboxFieldItem.propTypes = {
  /**
   * Toggles whether or not the checkbox is checked or unchecked
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
   * Slot for node to appear directly after item text. Typically used to include a Toolip
   */
  itemAfter: PropTypes.node,
  /**
   * HTML name attribute for the checkbox
   */
  name: PropTypes.string,
  /**
   * Function that fires when the value changes
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
   * The label text for the CheckboxFieldItem
   */
  text: PropTypes.string,
  /**
   * Theme variations:
   * - **inverted** is for a CheckboxFieldItem displayed on a dark background
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * A string representing the value of the checkbox
   */
  value: PropTypes.string
};

export default CheckboxFieldItem;
