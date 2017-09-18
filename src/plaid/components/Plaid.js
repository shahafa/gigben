import React, { Component } from 'react';
import PlaidLink from './PlaidLink';

class Plaid extends Component {
  state = {
    plaidLinkSandboxPublicKey: '',
    plaidLinkSandboxOpen: false,
    plaidLinkDevelopmentPublicKey: '',
    plaidLinkDevelopmentOpen: false,
  }

  render() {
    const {
      plaidLinkSandboxPublicKey,
      plaidLinkSandboxOpen,
      plaidLinkDevelopmentPublicKey,
      plaidLinkDevelopmentOpen,
    } = this.state;

    return (
      <div style={{ padding: 30 }}>
        <h1>Sandbox</h1>

        <button onClick={() => this.setState({ plaidLinkSandboxOpen: true })}>
          Open Link Sandbox
        </button>

        <PlaidLink
          env="sandbox"
          open={plaidLinkSandboxOpen}
          onLoginSuccess={publicKey => this.setState({
            plaidLinkSandboxOpen: false,
            plaidLinkSandboxPublicKey: publicKey,
          })}
          onExit={() => this.setState({ plaidLinkSandboxOpen: false })}
        />

        <div style={{ marginTop: 30 }}>{`Public Key: ${plaidLinkSandboxPublicKey}`}</div>

        <hr />

        <h1>Development</h1>

        <button onClick={() => this.setState({ plaidLinkDevelopmentOpen: true })}>
          Open Link Development
        </button>

        <PlaidLink
          env="development"
          open={plaidLinkDevelopmentOpen}
          onLoginSuccess={publicKey => this.setState({
            plaidLinkDevelopmentOpen: false,
            plaidLinkDevelopmentPublicKey: publicKey,
          })}
          onExit={() => this.setState({ plaidLinkDevelopmentOpen: false })}
        />

        <div style={{ marginTop: 30 }}>{`Public Key: ${plaidLinkDevelopmentPublicKey}`}</div>
      </div>
    );
  }
}

export default Plaid;
