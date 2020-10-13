import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Label.scss';

class Label extends React.Component {
  render() {
    const {
      className,
      id,
      htmlFor,
      optionalLabel,
      text,
      required,
      requiredLabel,
      hideLabel,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-label', className, {
      'cn-u-is-vishidden': hideLabel
    });

    return (
      <label
        className={componentClassName}
        htmlFor={htmlFor}
        id={id}
        {...other}
      >
        {text}{' '}
        {!required && <span className='cn-c-label__flag'>{optionalLabel}</span>}
        {requiredLabel && (
          <span className='cn-c-label__flag'>{requiredLabel}</span>
        )}
      </label>
    );
  }
}

Label.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel: PropTypes.bool,
  /**
   * HTML `for` attribute, which maps the label to an associated input `id`
   */
  htmlFor: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Indicates that field is required for form to be successfully submitted. Non-required fields will display a text "(optional)" beside the label text
   */
  required: PropTypes.bool,
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel: PropTypes.string,
  /**
   * The label text string
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

Label.defaultProps = {
  required: false,
  optionalLabel: '(optional)'
};

export default Label;
