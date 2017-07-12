import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { red } from 'material-ui/colors';
import Container from 'components/common/Container';
import Text from 'components/common/Text';
import Link from 'components/common/Link';
import Input from 'components/common/Input';
import Spacer from 'components/common/Spacer';
import Button from 'components/common/Button';
import SigninShell from './SigninShell';

const Signup = ({
  onLoginClick,
  email,
  emailError,
  onEmailChange,
  onEmailBlur,
  password,
  passwordError,
  onPasswordChange,
  onPasswordBlur,
  passwordConfirm,
  passwordConfirmError,
  onPasswordConfirmChange,
  onPasswordConfirmBlur,
  errorText,
  isSigningUp,
  onSignupClick,
}) => (
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
        error={emailError}
        onChange={event => onEmailChange(event.target.value)}
        onBlur={onEmailBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onSignupClick(); }}
      />

      <Spacer vertical="12px" />

      <Input
        label="Password"
        type="password"
        value={password}
        error={passwordError}
        onChange={event => onPasswordChange(event.target.value)}
        onBlur={onPasswordBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onSignupClick(); }}
      />

      <Spacer vertical="12px" />

      <Input
        label="Type your password again"
        type="password"
        value={passwordConfirm}
        error={passwordConfirmError}
        onChange={event => onPasswordConfirmChange(event.target.value)}
        onBlur={onPasswordConfirmBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onSignupClick(); }}
      />
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

    {isSigningUp ?
      <CircularProgress size={43} />
    :
      <Button onClick={onSignupClick}>
        Sign Up
      </Button>
    }

    <Spacer vertical="10px" />
  </SigninShell>

);

Signup.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onEmailBlur: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordError: PropTypes.bool.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onPasswordBlur: PropTypes.func.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  passwordConfirmError: PropTypes.bool.isRequired,
  onPasswordConfirmChange: PropTypes.func.isRequired,
  onPasswordConfirmBlur: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  isSigningUp: PropTypes.bool.isRequired,
  onSignupClick: PropTypes.func.isRequired,
};

export default Signup;
