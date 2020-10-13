import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classnames from 'classnames';
import Checkbox from '../Checkbox';
import './InlineCheckbox.scss';

class InlineCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxChecked: this.props.checked ? this.props.checked : false
    };

    this.id = this.props.id || shortid.generate();

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checkboxChecked: this.props.checked
      });
    }
  }

  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
    this.setState({
      checkboxChecked: !this.state.checkboxChecked
    });
  }

  render() {
    const {
      className,
      id,
      name,
      label,
      onChange,
      value,
      ...other
    } = this.props;

    const componentClassName = classnames(
      'cn-c-inline-checkbox',
      className,
      {}
    );

    return (
      <label className={componentClassName} htmlFor={this.id} {...other}>
        <Checkbox
          className='cn-c-inline-checkbox__control'
          id={this.id}
          name={name}
          checked={this.state.checkboxChecked}
          value={value}
          onChange={this.onChange}
        />
        <div className='cn-c-inline-checkbox__text'>{label}</div>
      </label>
    );
  }
}

InlineCheckbox.propTypes = {
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * HTML label text
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * HTML name attribute for the checkbox
   */
  name: PropTypes.string.isRequired,
  /**
   * Function passed down from higher level component
   */
  onChange: PropTypes.func,
  /**
   * HTML value attribute for the checkbox
   */
  value: PropTypes.string
};

export default InlineCheckbox;
