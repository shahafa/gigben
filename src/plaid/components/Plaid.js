import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link';

class Plaid extends Component {
  state = {
    publicKey: '',
  }

  handleOnSuccess = publicKey => this.setState({ publicKey })

  render() {
    const { publicKey } = this.state;

    return (
      <div style={{ padding: 30 }}>
        <PlaidLink
          publicKey="77d1e73a10adb6ec5098f5b097308b"
          product="auth, transactions, identity"
          env="sandbox"
          clientName="gigben"
          onSuccess={this.handleOnSuccess}
        />

        <div style={{ marginTop: 30 }}>{`Public Key: ${publicKey}`}</div>
      </div>
    );
  }
}

export default Plaid;
