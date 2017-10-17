import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import { isTokenExpired } from 'common/utils/jwtHelper';
import { signup, resetUserState } from '../actions';
import SigninShell from './SigninShell';
import SignupForm from './SignupForm';

class SignupPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    isSigningup: PropTypes.bool.isRequired,
    serverErrorText: PropTypes.string.isRequired,
  }

  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirm: '',
    passwordConfirmError: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetUserState());
  }

  handleSignupClick = () => {
    const { dispatch } = this.props;
    const {
      email, password, passwordConfirm,
    } = this.state;

    let emailError = '';
    let passwordError = '';
    let passwordConfirmError = '';

    if (validator.isEmpty(email)) {
      emailError = 'Email field is required';
    } else if (!validator.isEmail(email)) {
      emailError = 'Email address is not valid';
    } else if (validator.isEmpty(password)) {
      passwordError = 'Password field is required';
    } else if (!validator.isLength(password, { min: 8 })) {
      passwordError = 'Password must be at least 8 characters long';
    } else if (validator.isEmpty(passwordConfirm)) {
      passwordConfirmError = 'Password confirmation field is required';
    } else if (password !== passwordConfirm) {
      passwordConfirmError = 'Passwords don\'t match.';
    } else {
      dispatch(signup(email, passwordConfirm));
    }

    this.setState({
      emailError,
      passwordError,
      passwordConfirmError,
    });
  }

  render() {
    const {
      history,
      token,
      isAuthenticated,
      isVerified,
      isSigningup,
      serverErrorText,
    } = this.props;

    const {
      email,
      emailError,
      password,
      passwordError,
      passwordConfirm,
      passwordConfirmError,
    } = this.state;

    if (isAuthenticated && !isTokenExpired(token) && !isVerified) {
      return <Redirect to={{ pathname: '/verify' }} />;
    }

    return (
      <SigninShell>
        <SignupForm
          onLoginClick={() => history.push('/login')}
          email={email}
          emailError={emailError !== ''}
          onEmailChange={value => this.setState({ email: value })}
          onEmailBlur={() => this.setState({ emailError: '' })}
          password={password}
          passwordError={passwordError !== ''}
          onPasswordChange={value => this.setState({ password: value })}
          onPasswordBlur={() => this.setState({ passwordError: '' })}
          passwordConfirm={passwordConfirm}
          passwordConfirmError={passwordConfirmError !== ''}
          onPasswordConfirmChange={value => this.setState({ passwordConfirm: value })}
          onPasswordConfirmBlur={() => this.setState({ passwordConfirmError: '' })}
          onEnterPress={this.handleSignupClick}
          errorText={
            emailError ||
            passwordError ||
            passwordConfirmError ||
            serverErrorText
          }
          isSigningup={isSigningup}
          onSignupClick={this.handleSignupClick}
        />
      </SigninShell>
    );
  }
}

const mapStateToProps = state => ({
  token: state.signin.token,
  isAuthenticated: state.signin.isAuthenticated,
  isSigningup: state.signin.isSigningup,
  isVerified: state.signin.isVerified,
  serverErrorText: state.signin.errorText,
});

export default connect(mapStateToProps)(SignupPage);
