import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import Button from '../Button';

class TextFieldExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      fieldNote: false
    };
  }

  textFieldOnBlur(e) {
    if (this.state.isError === false) {
      this.setState({
        isError: true,
        fieldNote: 'Missing an @ symbol. Please enter a valid email address.'
      });
    }
  }

  render() {
    const { className, ...other } = this.props;

    return (
      <div>
        <TextField
          name="text-field-1"
          label="Email Address"
          type="email"
          title="Please enter a valid email address."
          onBlur={e => this.textFieldOnBlur(e)}
          isError={this.state.isError}
          fieldNote={
            this.state.isError
              ? this.state.fieldNote
              : 'Enter your email address'
          }
        />
        <Button text="Button" />
      </div>
    );
  }
}

TextFieldExample.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default TextFieldExample;
