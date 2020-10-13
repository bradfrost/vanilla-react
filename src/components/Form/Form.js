import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Form.scss';

class Form extends React.Component {
  render() {
    const { className, id, action, method, children, ...other } = this.props;
    const componentClassName = classnames('cn-c-form', className, {});

    return (
      <form
        className={componentClassName}
        id={id}
        method={method}
        action={action}
        {...other}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  /**
   * HTML action attribute, which contains the URI to be triggered on form submission
   */
  action: PropTypes.string,
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * HTML id for the form
   */
  id: PropTypes.string,
  /**
   * The HTTP method the browser uses to submit the form
   */
  method: PropTypes.oneOf(['post', 'get', 'dialog'])
};

export default Form;
