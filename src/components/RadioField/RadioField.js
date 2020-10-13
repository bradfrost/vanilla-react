import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import { allByType } from 'react-children-by-type';
import FieldNote from '../FieldNote';
import Legend from '../Legend';
import RadioFieldItem from '../RadioFieldItem';
import Icon from '../Icon';
import './RadioField.scss';

class RadioField extends React.Component {
  constructor(props) {
    super(props);

    const items = this.props.children
      ? React.Children.map(this.props.children, child => child.props)
      : this.props.items;

    const checkedIndex = items.reduce(
      (acc, item, i) => (acc == null && item.checked ? i : acc),
      null
    );

    this.state = {
      checkedIndex
    };

    this.onChecked = this.onChecked.bind(this);

    if (this.props.fieldNote) {
      this.ariaDescribedBy = this.props.ariaDescribedBy || shortid.generate();
    }

    if (props.isActiveIndex)
      immediateDeprecate(
        `RadioField.props.isActiveIndex has been consolidated into RadioFieldItem.props.checked and takes no effect. It will be removed in the next major version`
      );
    if (props.isRadioTabs)
      immediateDeprecate(
        `RadioField.props.isRadioTabs has been deprecated and takes no effect. It will be removed in the next major version`
      );
  }

  get radioItems() {
    if (this.props.children) {
      return allByType(this.props.children, RadioFieldItem);
    } else {
      return this.props.items.map((item, index) => {
        return (
          <RadioFieldItem
            key={'cn-c-radio-field-item' + index}
            id={item.id}
            name={item.name}
            value={item.value}
            theme={item.theme}
            disabled={item.disabled}
            readOnly={item.readOnly}
            text={item.text}
          />
        );
      });
    }
  }

  onChecked(index) {
    this.setState({
      checkedIndex: index
    });

    if (this.props.onChange) {
      this.props.onChange(index);
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
      checked,
      radioLegendPosition,
      ariaDescribedBy,
      items,
      hideLegend,
      optionalLabel,
      requiredLabel,
      theme,
      onChange,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-radio-field', className, {
      'cn-c-radio-field--inline': variant == 'inline',
      'cn-c-radio-field--inline-label': radioLegendPosition == 'inline-label',
      'cn-c-radio-field--small': size == 'small',
      'cn-c-radio-field--inverted': theme == 'inverted',
      'cn-is-error': isError,
      'cn-is-disabled': disabled
    });

    const children = this.radioItems.map((item, index) => {
      return React.cloneElement(item, {
        checked: this.state.checkedIndex === index,
        onChange: e => {
          this.onChecked(index, e);
        }
      });
    });

    return (
      <fieldset className={componentClassName} id={id} {...other}>
        <Legend
          className='cn-c-radio-field__label'
          hideLegend={hideLegend}
          text={label}
          required={required}
          optionalLabel={optionalLabel}
          requiredLabel={requiredLabel}
          aria-describedby={this.ariaDescribedBy}
        />

        <div className='cn-c-radio-field__body'>
          <ul className='cn-c-radio-field__list'>{children}</ul>
        </div>
        {fieldNote && (
          <FieldNote
            className='cn-c-radio-field__note'
            id={this.ariaDescribedBy}
          >
            {fieldNote}
          </FieldNote>
        )}
      </fieldset>
    );
  }
}

RadioField.propTypes = {
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
   * Toggles the visibility of the legend
   */
  hideLegend: PropTypes.bool,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * Array of values to populate RadioField. Array must take the appropriate shape:
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string
    })
  ),
  /**
   * HTML label text
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  /**
   * Calls back with the active index
   */
  onChange: PropTypes.func,
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Radio legend position variations:
   * - **inline-label**
   */
  position: PropTypes.oneOf(['inline-label']),
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel: PropTypes.string,
  /**
   * Size variations:
   * - **small** yields a smaller radio button and text
   */
  size: PropTypes.oneOf(['small']),
  /**
   * Theme variations:
   * - **inverted** is for RadioFields displayed on a dark background
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * Stylistic variations:
   * - **inline** places each RadioFieldItem beside one another
   */
  variant: PropTypes.oneOf(['inline'])
};

RadioField.defaultProps = {
  required: true
};

export default RadioField;
