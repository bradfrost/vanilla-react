import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Grid.scss';

class Grid extends React.Component {
  render() {
    const { className, variant, children, ...other } = this.props;

    const componentClassName = classnames('cn-l-grid', className, {
      'cn-l-grid--2up': variant == '2up',
      'cn-l-grid--1-2-4up': variant == '1-2-4up'
    });

    return (
      <div
        className={componentClassName}
        ref={gridRef => (this.gridRef = gridRef)}
        {...other}
      >
        {children}
      </div>
    );
  }
}

Grid.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Stylistic variations of the GridL
   * - **1up** yields a Grid whose GridItems span the entire width of the container
   * - **1-to-3up** yields a Grid whose GridItems are stacked on small screens and expand to fit 3 across when enough screen real estate becomes available to display them comfortably side-by-side
   * - **2up** yields a Grid whose GridItems are stacked on small screens but display side-by-side when enough screen real estate is available to do so
   * - **3up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern and then transforms again to a 3-across pattern
   * - **4up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern, transforms again to a 3-across pattern, and ultimately transforms to a 4-across pattern
   * - **1-2-4up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern, and ultimately transforms to a 4-across pattern
   * - **side-by-side** yields a Grid whose GridItems are always displayed side-by-side
   */
  variant: PropTypes.oneOf(['2up', '1-2-4up'])
};

export default Grid;
