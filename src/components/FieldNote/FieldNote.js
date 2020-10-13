import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './FieldNote.scss';

class FieldNote extends React.Component {
  render() {
    const { className, id, children, ...other } = this.props;

    const componentClassName = classnames('cn-c-field-note', className);
    return (
      <div
        className={componentClassName}
        aria-live="assertive"
        id={id}
        {...other}
      >
        {children}
      </div>
    );
  }
}

FieldNote.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string
};

export default FieldNote;
