import React from 'react';
import PropTypes from 'prop-types';
import { Page, Container, Logo } from 'common/components';

const SignInShell = ({ children }) => (
  <Page directionColumn>
    <Container padding="20px 0 0 50px">
      <Logo size="42px" />
    </Container>

    {children}
  </Page>
);

SignInShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default SignInShell;
