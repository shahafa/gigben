import React from 'react';
import PropTypes from 'prop-types';
import { Page, Container, Logo, Text, Spacer, Link, Button } from 'common/components';

const StepContainer = ({
  title,
  children,
  onBackClick,
  onNextClick,
  hideBack,
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

      <Container alignItemsCenter justifyContentSpaceBetween width={hideBack ? '110px' : '200px'}>
        {!hideBack &&
          <Link weight="300" onClick={onBackClick}>{'< Back'}</Link>
        }

        <Button width="110px" onClick={onNextClick}>
          Next
        </Button>
      </Container>

      <Spacer vertical="30px" />
    </Container>
  </Page>
);

StepContainer.propTypes = {
  title: PropTypes.string.isRequired,
  onBackClick: PropTypes.func,
  onNextClick: PropTypes.func.isRequired,
  hideBack: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

StepContainer.defaultProps = {
  hideBack: false,
  onBackClick: () => {},
};

export default StepContainer;
