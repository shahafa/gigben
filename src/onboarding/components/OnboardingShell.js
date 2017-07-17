import React from 'react';
import PropTypes from 'prop-types';
import { Page, Container, Logo, Text, Spacer, Link, Button } from 'common/components';

const OnboardingShell = ({
  title,
  children,
  onBackClick,
  onNextClick,
}) => (
  <Page directionColumn>
    <Container padding="20px 0 0 50px">
      <Logo size="42px" />
    </Container>

    <Container directionColumn justifyContentCenter alignItemsCenter stretch>
      <Text size="28px" weight="200" align="center">
        {title}
      </Text>

      <Spacer vertical="70px" />

      {children}

      <Spacer vertical="70px" />

      <Container alignItemsCenter justifyContentSpaceBetween width="200px">
        <Link weight="300" onClick={onBackClick}>{'< Back'}</Link>

        <Button width="110px" onClick={onNextClick}>
          Next
        </Button>
      </Container>
    </Container>
  </Page>
);

OnboardingShell.propTypes = {
  title: PropTypes.string.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default OnboardingShell;
