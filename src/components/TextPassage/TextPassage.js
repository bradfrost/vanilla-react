import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TextPassage.scss';

class TextPassage extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames('cn-c-text-passage', className, {});

    return (
      <div className={componentClassName} {...other}>
        <div className='cn-c-text-passage__inner'>{children}</div>
      </div>
    );
  }
}

TextPassage.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default TextPassage;
