import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import { red } from 'material-ui/colors';
import { Container, Spacer, Text, Button, Link } from 'common/components';

const SignupForm = ({
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
  invitationCode,
  invitationCodeError,
  onInvitationCodeChange,
  onInvitationCodeBlur,
  errorText,
  isSigningup,
  onSignupClick,
}) => (
  <Container directionColumn justifyContentCenter alignItemsCenter stretch>
    <Text size="56px" weight="200" align="center">
      Sign Up
    </Text>

    <Container marginTop="20px">
      <Text size="20px" weight="300" align="center">
        Already have an account?
      </Text>

      <Spacer horizontal="7px" />

      <Link size="20px" weight="300" onClick={onLoginClick}>
        Log In
      </Link>
    </Container>

    <Container directionColumn width="360px" margin="30px 0 25px 0">
      <TextField
        autoFocus
        label="Email"
        value={email}
        error={emailError}
        onChange={event => onEmailChange(event.target.value)}
        onBlur={onEmailBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onSignupClick(); }}
      />

      <Spacer vertical="12px" />

      <TextField
        label="Password"
        type="password"
        value={password}
        error={passwordError}
        onChange={event => onPasswordChange(event.target.value)}
        onBlur={onPasswordBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onSignupClick(); }}
      />

      <Spacer vertical="12px" />

      <TextField
        label="Type your password again"
        type="password"
        value={passwordConfirm}
        error={passwordConfirmError}
        onChange={event => onPasswordConfirmChange(event.target.value)}
        onBlur={onPasswordConfirmBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onSignupClick(); }}
      />

      <Spacer vertical="12px" />

      <TextField
        label="Invitation code"
        value={invitationCode}
        error={invitationCodeError}
        onChange={event => onInvitationCodeChange(event.target.value)}
        onBlur={onInvitationCodeBlur}
        onKeyPress={(event) => { if (event.key === 'Enter') onSignupClick(); }}
      />
    </Container>

    <Text size="16px" height="16px" weight="300" color={red[500]} align="center">
      {errorText}
    </Text>

    <Spacer vertical="25px" />

    {isSigningup ?
      <CircularProgress size={43} />
      :
      <Button onClick={onSignupClick}>
        Sign Up
      </Button>
    }

    <Spacer vertical="10px" />
  </Container>
);

SignupForm.propTypes = {
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
  invitationCode: PropTypes.string.isRequired,
  invitationCodeError: PropTypes.bool.isRequired,
  onInvitationCodeChange: PropTypes.func.isRequired,
  onInvitationCodeBlur: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  isSigningup: PropTypes.bool.isRequired,
  onSignupClick: PropTypes.func.isRequired,
};

export default SignupForm;
