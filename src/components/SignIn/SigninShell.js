import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/shared/Page';
import Container from 'components/shared/Container';
import Logo from 'components/shared/Logo';

const SignInShell = ({ children }) => (
  <Page directionColumn>
    <Container padding="20px 0 0 30px">
      <Logo size="42px" />
    </Container>

    <Container directionColumn justifyContentCenter alignItemsCenter stretch>
      {children}
    </Container>
  </Page>
);

SignInShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default SignInShell;
