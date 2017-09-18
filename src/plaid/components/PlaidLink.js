import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';

class PlaidLink extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      env,
      open,
      onLoginSuccess,
      onExit,
    } = this.props;

    if (nextProps.open && open !== nextProps.open) {
      const handler = Plaid.create({ // eslint-disable-line
        apiVersion: 'v2',
        clientName: 'gigben',
        env,
        key: '77d1e73a10adb6ec5098f5b097308b',
        product: ['auth', 'transactions', 'identity'],
        onSuccess: onLoginSuccess,
        onExit,
      });

      handler.open();
    }
  }

  render() {
    return <div />;
  }
}

PlaidLink.propTypes = {
  env: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
};

export default scriptLoader('https://cdn.plaid.com/link/v2/stable/link-initialize.js')(PlaidLink);
