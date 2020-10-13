import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import PrimaryNavItem from '../PrimaryNavItem';
import './PrimaryNav.scss';

const CONTAINER = Symbol('CONTAINER');

class PrimaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null
    };

    this.onClickOutside = this.onClickOutside.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onNavClicked = this.onNavClicked.bind(this);

    this.id = this.props.id || shortid.generate();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClickOutside);
  }

  onClickOutside(event) {
    if (this[CONTAINER] && !this[CONTAINER].contains(event.target)) {
      this.setState({
        currentIndex: null
      });
    }
  }

  onToggle(index, e) {
    e.preventDefault();

    if (!this.props.items[index].megaMenuItems) return;

    if (this.state.currentIndex != index) {
      this.setState({
        currentIndex: index
      });
    } else {
      this.setState({
        currentIndex: null
      });
    }
  }

  onNavClicked() {
    this.setState({
      currentIndex: null
    });
  }

  render() {
    const { className, items, id, ariaLabel, ...other } = this.props;
    const { currentIndex } = this.state;

    const componentClassName = classnames('cn-c-primary-nav', className);

    return (
      <nav
        id={this.id}
        aria-label={ariaLabel}
        className={componentClassName}
        {...other}
      >
        <ul
          className='cn-c-primary-nav__list'
          ref={ref => (this[CONTAINER] = ref)}
        >
          {items.map((item, index) => {
            const itemClassName = classnames({
              'cn-is-active': item.megaMenuItems && currentIndex === index
            });
            return (
              <PrimaryNavItem
                className={itemClassName}
                iconName={item.iconName}
                key={`cn-c-primary-nav-item-${index}`}
                tagName={item.tag}
                href={item.href}
                text={item.text}
                items={item.megaMenuItems}
                onClick={e => this.onToggle(index, e)}
                closeMenu={this.onNavClicked}
              />
            );
          })}
        </ul>
      </nav>
    );
  }
}

PrimaryNav.propTypes = {
  /**
   * aria-label for `nav` element to describe PrimaryNav to screen readers
   */
  ariaLabel: PropTypes.string,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

PrimaryNav.defaultProps = {
  ariaLabel: 'primary navigation'
};

export default PrimaryNav;
