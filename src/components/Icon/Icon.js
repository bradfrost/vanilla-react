import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import svg4everybody from 'svg4everybody';
import './Icon.scss';
import icons from '../../icons/spritemap.svg';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id || shortid.generate();
  }

  componentDidMount() {
    svg4everybody(); //Required to get IE to render icon sprites
  }

  render() {
    const { className, name, id, theme, title, ...other } = this.props;

    const componentClassName = classnames('cn-c-icon', className, {
      'cn-c-icon--inverted': theme === 'inverted'
    });

    return (
      <svg
        aria-hidden={!title}
        aria-labelledby={title && this.id}
        className={componentClassName}
        focusable={false}
        role={title && 'img'}
        {...other}
      >
        {title && <title id={this.id}>{title}</title>}
        <use xlinkHref={`${icons}#${name}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * ID used so the svg can read the title of the SVG icon to the user when accessibility is needed
   */
  id: PropTypes.string,
  /**
   * Name of icon to reference in icon sprite
   */
  name: PropTypes.string.isRequired,
  /**
   * Color theme for the component. "inverted" theme is for use on dark backgrounds
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * SVG title which serves as alt text for the SVG.
   */
  title: PropTypes.string
};

export default Icon;
