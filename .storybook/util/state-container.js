import React from 'react';
import PropTypes from 'prop-types';

class StateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.initialValue };

    this.setValue = this.setValue.bind(this);
  }

  setValue(value) {
    this.setState({ value });
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return children(value, this.setValue);
  }
}

StateContainer.propTypes = {
  initialValue: PropTypes.any.isRequired
};

export default StateContainer;
