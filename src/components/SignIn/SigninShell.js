import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/common/Page';
import Container from 'components/common/Container';
import Logo from 'components/common/Logo';

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
