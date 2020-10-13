import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './PageHeader.scss';

class PageHeader extends React.Component {
  render() {
    const {
      align,
      className,
      description,
      size,
      title,
      titleAfter,
      ...other
    } = this.props;

    const componentClassName = classnames('cn-c-page-header', className, {
      'cn-c-page-header--small': size == 'small',
      'cn-c-page-header--center': align == 'center'
    });

    return (
      <div className={componentClassName} {...other}>
        <h1 className='cn-c-page-header__title'>{title}</h1>

        {description && (
          <div className='cn-c-page-header__description cn-c-text-passage'>
            {description}
          </div>
        )}
      </div>
    );
  }
}

PageHeader.propTypes = {
  /**
   * Align variations:
   * - **center** yields a PageHeader whose contents are centered
   */
  align: PropTypes.oneOf(['center']),
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Description text that appears directly below the main title
   */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Size variations:
   * - **small** yields a PageHeader with smaller typography
   */
  size: PropTypes.oneOf(['small']),
  /**
   * Page heading title text
   */
  title: PropTypes.string.isRequired
};

export default PageHeader;
