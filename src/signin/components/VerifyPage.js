import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import { isTokenExpired } from 'common/utils/jwtHelper';
import { verify, clearError } from '../actions';
import SigninShell from './SigninShell';
import VerifyForm from './VerifyForm';

class VerifyPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    isVerifying: PropTypes.bool.isRequired,
    serverErrorText: PropTypes.string.isRequired,
  }

  state = {
    code: '',
    codeError: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(clearError());
  }

  handleVerifyClick = () => {
    const { dispatch, userId } = this.props;
    const { code } = this.state;

    let codeError = '';

    if (validator.isEmpty(code)) {
      codeError = 'Code field is required';
    } else {
      dispatch(verify(userId, code));
    }

    this.setState({
      codeError,
    });
  }

  render() {
    const {
      token,
      userEmail,
      isAuthenticated,
      isVerified,
      isVerifying,
      serverErrorText,
    } = this.props;

    const {
      code,
      codeError,
    } = this.state;

    if (isAuthenticated && !isTokenExpired(token) && isVerified) {
      return <Redirect to={{ pathname: '/bank-login' }} />;
    } else if (!isAuthenticated) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    return (
      <SigninShell>
        <VerifyForm
          userEmail={userEmail}
          code={code}
          codeError={codeError !== ''}
          onCodeChange={value => this.setState({ code: value })}
          onCodeBlur={() => this.setState({ codeError: '' })}
          errorText={codeError || serverErrorText}
          isVerifying={isVerifying}
          onVerifyClick={this.handleVerifyClick}
        />
      </SigninShell>
    );
  }
}

const mapStateToProps = state => ({
  token: state.signin.token,
  userId: state.signin.id,
  userEmail: state.signin.email,
  isAuthenticated: state.signin.isAuthenticated,
  isVerified: state.signin.isVerified,
  isVerifying: state.signin.isVerifying,
  serverErrorText: state.signin.errorText,
});

export default connect(mapStateToProps)(VerifyPage);
