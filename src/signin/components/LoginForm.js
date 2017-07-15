import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { grey, red } from 'material-ui/colors';
import { Container, Spacer, Text, Button, Link, Input, HoverableLink } from 'common/components';

const LoginForm = ({
  onSignupClick,
  email,
  emailError,
  onEmailChange,
  onEmailBlur,
  password,
  passwordError,
  onPasswordChange,
  onPasswordBlur,
  onForgotPasswordClick,
  errorText,
  isAuthenticating,
  onLoginClick,
}) => (
  <Container directionColumn justifyContentCenter alignItemsCenter stretch>
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
        autoFocus
        label="Email"
        value={email}
        error={emailError}
        onChange={event => onEmailChange(event.target.value)}
        onBlur={onEmailBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onLoginClick(); }}
      />

      <Spacer vertical="12px" />

      <Input
        label="Password"
        type="password"
        value={password}
        error={passwordError}
        onChange={event => onPasswordChange(event.target.value)}
        onBlur={onPasswordBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onLoginClick(); }}
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
      {errorText}
    </Text>

    <Spacer vertical="35px" />

    {isAuthenticating ?
      <CircularProgress size={43} />
    :
      <Button onClick={onLoginClick}>
        Log In
      </Button>
    }

    <Spacer vertical="10px" />
  </Container>
);

LoginForm.propTypes = {
  onSignupClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onEmailBlur: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordError: PropTypes.bool.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onPasswordBlur: PropTypes.func.isRequired,
  onForgotPasswordClick: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired,
};

export default LoginForm;
