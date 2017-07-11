import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetAuthState, login, signup, verify } from 'actions/authActions';
import Login from 'components/signin/Login';
import Signup from 'components/signin/Signup';
import Verify from 'components/signin/Verify';
import Temp from 'components/Temp';

const LOGIN_MODE = 'LOGIN';
const SIGNUP_MODE = 'SIGNUP';
// const FORGOT_PASSWORD_MODE = 'FORGOT_PASSWORD';

class SignInPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    isVerifying: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    isSigningUp: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
  }

  state = {
    mode: LOGIN_MODE,
  }

  setMode = (mode) => {
    const { dispatch } = this.props;
    dispatch(resetAuthState());

    this.setState({ mode });
  }

  render() {
    const {
      dispatch,
      user,
      isAuthenticated,
      isAuthenticating,
      isVerifying,
      isVerified,
      isSigningUp,
      errorText,
    } = this.props;

    const { mode } = this.state;

    if (isAuthenticated && isVerified) {
      return (<Temp />);
    } else if (isAuthenticated && !isVerified) {
      return (
        <Verify
          isVerifying={isVerifying}
          userEmail={user.email}
          errorText={errorText}
          onVerifyClick={(email, code) => dispatch(verify(email, code))}
        />
      );
    } else if (mode === LOGIN_MODE) {
      return (
        <Login
          isAuthenticating={isAuthenticating}
          errorText={errorText}
          onLoginClick={(email, password) => dispatch(login(email, password))}
          onSignupClick={() => this.setMode(SIGNUP_MODE)}
          onForgotPasswordClick={() => this.setMode(LOGIN_MODE)}
        />
      );
    } else if (mode === SIGNUP_MODE) {
      return (
        <Signup
          isSigningUp={isSigningUp}
          errorText={errorText}
          onSignupClick={(email, password) => dispatch(signup(email, password))}
          onLoginClick={() => this.setMode(LOGIN_MODE)}
        />
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isVerified: state.auth.user.verified,
  isAuthenticating: state.auth.isAuthenticating,
  isSigningUp: state.auth.isSigningUp,
  isVerifying: state.auth.isVerifying,
  errorText: state.auth.errorText,
});

export default connect(mapStateToProps)(SignInPage);
