import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Section.scss';

class Section extends React.Component {
  render() {
    const {
      className,
      title,
      description,
      children,
      align,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-section', className, {
      'cn-c-section--center': align == 'center'
    });

    return (
      <section className={componentClassName} {...other}>
        <div className='cn-c-section__inner'>
          <header className='cn-c-section__header'>
            <h2 className='cn-c-section__title'>{title}</h2>
            {description && (
              <p className='cn-c-section__description'>{description}</p>
            )}
          </header>
          <div className='cn-c-section__body'>{children}</div>
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  /**
   * Align variations:
   * - **center** yields a center-aligned section header
   */
  align: PropTypes.oneOf(['center']),
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Description text string that appears below the section title
   */
  description: PropTypes.string,
  /**
   * Section heading text string
   */
  title: PropTypes.string
};
export default Section;
