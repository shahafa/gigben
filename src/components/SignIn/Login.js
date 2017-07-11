import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { CircularProgress } from 'material-ui/Progress';
import { grey, red } from 'material-ui/colors';
import Container from 'components/common/Container';
import Text from 'components/common/Text';
import Link from 'components/common/Link';
import Input from 'components/common/Input';
import Spacer from 'components/common/Spacer';
import HoverableLink from 'components/common/HoverableLink';
import Button from 'components/common/Button';
import SigninShell from './SigninShell';

class Login extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    onSignupClick: PropTypes.func.isRequired,
    onForgotPasswordClick: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    emailErrorText: '',
    password: '',
    passwordErrorText: '',
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
    } else {
      this.setState({ passwordErrorText: '' });
      return true;
    }

    return false;
  }

  handleEnterKeyClick = (event) => {
    if (event.key === 'Enter') {
      this.handleLoginClick();
    }
  }

  handleLoginClick = () => {
    const { onLoginClick } = this.props;
    const { email, password } = this.state;

    if (this.validateEmail() && this.validatePassword()) {
      onLoginClick(email, password);
    }
  }

  errorText = () => {
    const { emailErrorText, passwordErrorText } = this.state;
    const { errorText } = this.props;

    if (emailErrorText !== '') {
      return emailErrorText;
    } else if (passwordErrorText !== '') {
      return passwordErrorText;
    } else if (errorText !== '') {
      return errorText;
    }

    return '';
  }

  render() {
    const {
      email,
      password,
      emailErrorText,
      passwordErrorText,
    } = this.state;

    const {
      isAuthenticating,
      onSignupClick,
      onForgotPasswordClick,
    } = this.props;

    return (
      <SigninShell>
        <Text
          size="56px"
          weight="200"
          align="center"
        >
          Log In
        </Text>

        <Container marginTop="20px">
          <Text
            align="center"
            size="20px"
            weight="300"
          >
            New to Gigben?
          </Text>

          <Spacer horizontal="7px" />

          <Link
            size="20px"
            weight="300"
            onClick={onSignupClick}
          >
            Sign Up
          </Link>
        </Container>

        <Container
          directionColumn
          width="360px"
          margin="30px 0 30px 0"
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

          <HoverableLink
            size="14px"
            onClick={onForgotPasswordClick}
            weight="100"
            color={grey[600]}
          >
            Forgot Password?
          </HoverableLink>
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

        {isAuthenticating ?
          <CircularProgress size={43} />
        :
          <Button onClick={this.handleLoginClick}>
            Log In
          </Button>
        }

        <Spacer vertical="10px" />
      </SigninShell>
    );
  }
}

export default Login;
