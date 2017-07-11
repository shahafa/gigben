import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { CircularProgress } from 'material-ui/Progress';
import { red } from 'material-ui/colors';
import Container from 'components/shared/Container';
import Text from 'components/shared/Text';
import Link from 'components/shared/Link';
import Input from 'components/shared/Input';
import Spacer from 'components/shared/Spacer';
import Button from 'components/shared/Button';
import SigninShell from './SigninShell';

class Signup extends Component {
  static propTypes = {
    isSigningUp: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    onSignupClick: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    emailErrorText: '',
    passwordErrorText: '',
    passwordConfirmErrorText: '',
  }

  validateEmail = () => {
    const { email } = this.state;

    if (validator.isEmpty(email)) {
      this.setState({ emailErrorText: 'Email field is required' });
    } else if (!validator.isEmail(email)) {
      this.setState({ emailErrorText: 'Email address is not valid' });
    } else {
      this.setState({ emailErrorText: '' });
      return true;
    }

    return false;
  };

  validatePassword = () => {
    const { password } = this.state;

    if (validator.isEmpty(password)) {
      this.setState({ passwordErrorText: 'Password field is required' });
    } else if (!validator.isLength(password, { min: 8 })) {
      this.setState({ passwordErrorText: 'Password must be at least 8 characters long' });
    } else {
      this.setState({ passwordErrorText: '' });
      return true;
    }

    return false;
  }

  validatePasswordConfirm = () => {
    const { password, passwordConfirm } = this.state;

    if (validator.isEmpty(password)) {
      this.setState({ passwordConfirmErrorText: 'Password confirmation field is required' });
    } else if (password !== passwordConfirm) {
      this.setState({ passwordConfirmErrorText: 'Passwords don\'t match.' });
    } else {
      this.setState({ passwordConfirmErrorText: '' });
      return true;
    }

    return false;
  }

  handleEnterKeyClick = (event) => {
    if (event.key === 'Enter') {
      this.handleSignupClick();
    }
  }

  handleSignupClick = () => {
    const { onSignupClick } = this.props;
    const { email, password } = this.state;

    if (this.validateEmail() && this.validatePassword() && this.validatePasswordConfirm()) {
      onSignupClick(email, password);
    }
  }

  errorText = () => {
    const { emailErrorText, passwordErrorText, passwordConfirmErrorText } = this.state;
    const { errorText } = this.props;

    if (emailErrorText !== '') {
      return emailErrorText;
    } else if (passwordErrorText !== '') {
      return passwordErrorText;
    } else if (passwordConfirmErrorText !== '') {
      return passwordConfirmErrorText;
    } else if (errorText !== '') {
      return errorText;
    }

    return '';
  }

  render() {
    const {
      email,
      password,
      passwordConfirm,
      emailErrorText,
      passwordErrorText,
      passwordConfirmErrorText,
    } = this.state;

    const {
      isSigningUp,
      onLoginClick,
    } = this.props;

    return (
      <SigninShell>
        <Text
          size="56px"
          weight="200"
          align="center"
        >
          Sign Up
        </Text>

        <Container marginTop="20px">
          <Text
            align="center"
            size="20px"
            weight="300"
          >
            Already have an account?
          </Text>

          <Spacer horizontal="7px" />

          <Link
            size="20px"
            weight="300"
            onClick={onLoginClick}
          >
            Log In
          </Link>
        </Container>

        <Container
          directionColumn
          width="360px"
          margin="30px 0 45px 0"
        >
          <Input
            label="Email"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            onBlur={() => this.setState({ emailErrorText: '' })}
            onKeyPress={this.handleEnterKeyClick}
            error={emailErrorText !== ''}
          />

          <Spacer vertical="12px" />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            onBlur={() => this.setState({ passwordErrorText: '' })}
            onKeyPress={this.handleEnterKeyClick}
            error={passwordErrorText !== ''}
          />

          <Spacer vertical="12px" />

          <Input
            label="Type your password again"
            type="password"
            value={passwordConfirm}
            onChange={event => this.setState({ passwordConfirm: event.target.value })}
            onBlur={() => this.setState({ passwordConfirmErrorText: '' })}
            onKeyPress={this.handleEnterKeyClick}
            error={passwordConfirmErrorText !== ''}
          />
        </Container>

        <Text
          align="center"
          size="16px"
          height="16px"
          weight="300"
          color={red[500]}
        >
          {this.errorText()}
        </Text>

        <Spacer vertical="35px" />

        {isSigningUp ?
          <CircularProgress size={43} />
        :
          <Button onClick={this.handleSignupClick}>
            Sign Up
          </Button>
        }

        <Spacer vertical="10px" />
      </SigninShell>
    );
  }
}

export default Signup;
