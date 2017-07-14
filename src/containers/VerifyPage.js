import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import { verify, clearError } from 'actions/authActions';
import Verify from 'components/signin/Verify';

class VerifyPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
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
    const { dispatch, user } = this.props;
    const { code } = this.state;

    let codeError = '';

    if (validator.isEmpty(code)) {
      codeError = 'Code field is required';
    } else {
      dispatch(verify(user.email, code));
    }

    this.setState({
      codeError,
    });
  }

  render() {
    const {
      user,
      isAuthenticated,
      isVerified,
      isVerifying,
      serverErrorText,
    } = this.props;

    const {
      code,
      codeError,
    } = this.state;

    if (isAuthenticated && isVerified) {
      return <Redirect to={{ pathname: '/onboarding' }} />;
    } else if (!isAuthenticated) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    return (
      <Verify
        userEmail={user.email}
        code={code}
        codeError={codeError !== ''}
        onCodeChange={value => this.setState({ code: value })}
        onCodeBlur={() => this.setState({ codeError: '' })}
        errorText={codeError || serverErrorText}
        isVerifying={isVerifying}
        onVerifyClick={this.handleVerifyClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isVerified: state.auth.user.verified,
  isVerifying: state.auth.isVerifying,
  serverErrorText: state.auth.errorText,
});

export default connect(mapStateToProps)(VerifyPage);
