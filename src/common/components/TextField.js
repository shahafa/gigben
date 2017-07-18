import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validator from 'validator';
import BaseTextField from 'material-ui/TextField';
import { textProps, sizeProps } from './propReceivers';

const StyledTextField = styled(BaseTextField)`
  ${textProps};
  ${sizeProps};
`;

class TextField extends Component {
  static defaultProps = {
    label: '',
    value: '',
    onChange: null,
    onBlur: null,
    hideErrorText: false,
    validateOnBlur: false,
    notEmpty: false,
    isEmail: false,
    minLength: null,
  }

  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    hideErrorText: PropTypes.bool,
    validateOnBlur: PropTypes.bool,
    notEmpty: PropTypes.bool,
    isEmail: PropTypes.bool,
    minLength: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      isValid: true,
      errorText: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  getValue = () => this.state.value;

  isValid = () => this.validate(this.state.value);

  clearError = () => this.setState({
    isValid: true,
    errorText: '',
  });

  validate = (value) => {
    const {
      label,
      notEmpty,
      isEmail,
      minLength,
    } = this.props;

    let errorText = '';

    if (notEmpty && validator.isEmpty(value)) {
      errorText = `${label} field is required`;
    } else if (isEmail && !validator.isEmail(value)) {
      errorText = 'Email address is not valid';
    } else if (minLength && !validator.isLength(value, { min: minLength })) {
      errorText = `${label} must be at least 8 characters long`;
    }

    this.setState({
      isValid: errorText === '',
      errorText,
    });

    return errorText === '';
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleBlur = (event) => {
    if (this.props.validateOnBlur) {
      this.validate(event.target.value);
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  render() {
    const {
      value,
      isValid,
      errorText,
    } = this.state;

    const { hideErrorText, validateOnBlur, notEmpty, isEmail, minLength, ...rest } = this.props;

    return (
      <StyledTextField
        {...rest}
        value={value}
        error={!isValid}
        helperText={hideErrorText ? '' : errorText}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default (TextField);
