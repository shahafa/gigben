import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import { login, clearError } from 'actions/authActions';
import Login from 'components/signin/Login';

class LoginPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    serverErrorText: PropTypes.string.isRequired,
  }

  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(clearError());
  }

  handleLoginClick = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    let emailError = '';
    let passwordError = '';

    if (validator.isEmpty(email)) {
      emailError = 'Email field is required';
    } else if (!validator.isEmail(email)) {
      emailError = 'Email address is not valid';
    } else if (validator.isEmpty(password)) {
      passwordError = 'Password field is required';
    } else if (!validator.isLength(password, { min: 8 })) {
      passwordError = 'Password must be at least 8 characters long';
    } else {
      dispatch(login(email, password));
    }

    this.setState({
      emailError,
      passwordError,
    });
  }

  render() {
    const {
      history,
      isAuthenticated,
      isAuthenticating,
      isVerified,
      serverErrorText,
    } = this.props;

    const {
      email,
      emailError,
      password,
      passwordError,
    } = this.state;

    if (isAuthenticated && isVerified) {
      return <Redirect to={{ pathname: '/temp' }} />;
    } else if (isAuthenticated && !isVerified) {
      return <Redirect to={{ pathname: '/verify' }} />;
    }

    return (
      <Login
        onSignupClick={() => history.push('/signup')}
        email={email}
        emailError={emailError !== ''}
        onEmailChange={value => this.setState({ email: value })}
        onEmailBlur={() => this.setState({ emailError: '' })}
        password={password}
        passwordError={passwordError !== ''}
        onPasswordChange={value => this.setState({ password: value })}
        onPasswordBlur={() => this.setState({ passwordError: '' })}
        onForgotPasswordClick={() => history.push('/login')}
        errorText={emailError || passwordError || serverErrorText}
        isAuthenticating={isAuthenticating}
        onLoginClick={this.handleLoginClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAuthenticating: state.auth.isAuthenticating,
  isVerified: state.auth.user.verified,
  serverErrorText: state.auth.errorText,
});

export default connect(mapStateToProps)(LoginPage);
