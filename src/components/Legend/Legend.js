import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Legend.scss';

class Legend extends React.Component {
  render() {
    const {
      className,
      id,
      optionalLabel,
      text,
      required,
      requiredLabel,
      hideLegend,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-legend', className, {
      'cn-u-is-vishidden': hideLegend
    });

    return (
      <legend className={componentClassName} id={id} {...other}>
        {text}{' '}
        {!required && (
          <span className='cn-c-legend__flag'>{optionalLabel}</span>
        )}
        {requiredLabel && (
          <span className='cn-c-legend__flag'>{requiredLabel}</span>
        )}
      </legend>
    );
  }
}

Legend.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Toggles the visibility of the legend
   */
  hideLegend: PropTypes.bool,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * String for the optional legend. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * String for the required label to add brief additional information inline after the label
   */
  requiredLabel: PropTypes.string,
  /**
   * Legend text string
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

Legend.defaultProps = {
  required: true,
  optionalLabel: '(optional)'
};

export default Legend;
