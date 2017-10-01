import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scriptLoader from 'react-async-script-loader';
import { setPlaidToken, logout } from '../actions';
import SigninShell from './SigninShell';

class BankLogin extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isScriptLoadSucceed && !this.props.isScriptLoadSucceed) {
      const { demoMode } = this.props;

      const handler = Plaid.create({ // eslint-disable-line
        apiVersion: 'v2',
        clientName: 'gigben',
        env: demoMode ? 'sandbox' : 'development',
        key: '77d1e73a10adb6ec5098f5b097308b',
        product: ['auth', 'transactions', 'identity'],
        onSuccess: this.handlePlaidLinkLoginSuccess,
        onExit: this.handlePlaidLinkExit,
      });

      handler.open();
    }
  }

  handlePlaidLinkLoginSuccess = token => this.props.setPlaidToken(token);

  handlePlaidLinkExit = () => this.props.logout();

  render() {
    return (
      <SigninShell />
    );
  }
}

BankLogin.propTypes = {
  isScriptLoadSucceed: PropTypes.bool.isRequired,
  setPlaidToken: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  demoMode: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  demoMode: state.router.location.pathname.toLowerCase().endsWith('/demo'),
});

export default connect(mapStateToProps, { setPlaidToken, logout })(scriptLoader('https://cdn.plaid.com/link/v2/stable/link-initialize.js')(BankLogin));
