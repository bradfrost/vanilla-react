import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../Form';
import Label from '../Label';
import TextInput from '../TextInput';
import Button from '../Button';
import './InlineForm.scss';

class InlineForm extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id || shortid.generate();
  }

  render() {
    const {
      method,
      action,
      id,
      label,
      placeholder,
      cta,
      ...other
    } = this.props;

    return (
      <Form
        className='cn-c-inline-form'
        method={method}
        action={action}
        {...other}
      >
        <Label
          htmlFor={this.id}
          className='cn-c-inline-form__label cn-u-is-vishidden'
          text={label}
        />
        <div class='cn-c-inline-form__body'>
          <TextInput
            id={this.id}
            className='cn-c-inline-form__input'
            placeholder={placeholder}
          />

          <Button variant='primary' text={cta} />
        </div>
      </Form>
    );
  }
}

InlineForm.propTypes = {
  /**
   * HTML action attribute, which contains the URI to be triggered on form submission
   */
  action: PropTypes.string.isRequired,
  /**
   * Button call to action text
   */
  cta: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * HTML label text
   */
  label: PropTypes.string.isRequired,
  /**
   * The HTTP method the browser uses to submit the form
   */
  method: PropTypes.oneOf(['get', 'post']).isRequired,
  /**
   * Placeholder attribute for input. Note: placeholder should be used sparingly
   */
  placeholder: PropTypes.string
};

export default InlineForm;
