import React from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from '../LayoutContainer';
import './Hero.scss';

class Hero extends React.Component {
  render() {
    const { imgSrc, imgAlt, title, children, ...other } = this.props;

    return (
      <div className="cn-c-hero" {...other}>
        <img className="cn-c-hero__img" src={imgSrc} alt={imgAlt} />
        <div className="cn-c-hero__inner">
          <LayoutContainer className="cn-c-hero__layout-container">
            <div className="cn-c-hero__body">
              <h2 className="cn-c-hero__title">{title}</h2>
              <div className="cn-c-hero__description">{children}</div>
            </div>
          </LayoutContainer>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  /**
   * Child node(s) that can be nested inside component. The Hero child nodes will appear below the hero title
   */
  children: PropTypes.node,
  /**
   * Hero image alt text
   */
  imgAlt: PropTypes.string.isRequired,
  /**
   * Path to hero image
   */
  imgSrc: PropTypes.string.isRequired,
  /**
   * Hero heading title text
   */
  title: PropTypes.string
};

export default Hero;
