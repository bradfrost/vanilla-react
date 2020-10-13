import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class LogoImage extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.id || shortid.generate();
  }

  render() {
    const { id, ariaHidden, focusable, ...other } = this.props;

    return (
      <img
        className="cn-c-logo__img"
        src="https://via.placeholder.com/200x70"
        alt=""
      />
    );
  }
}

LogoImage.propTypes = {
  /**
   * Toggle aria-hidden attribute to hide element from assistive technology
   */
  ariaHidden: PropTypes.bool,
  /**
   * Toggle focusable attribute on SVG
   */
  focusable: PropTypes.bool,
  /**
   * HTML id for the component
   */
  id: PropTypes.string
};

LogoImage.defaultProps = {
  ariaHidden: true,
  focusable: false
};

export default LogoImage;
