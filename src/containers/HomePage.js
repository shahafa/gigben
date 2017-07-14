import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/common/Page';
import Container from 'components/common/Container';
import Logo from 'components/common/Logo2';
import Spacer from 'components/common/Spacer';
import Text from 'components/common/Text';
import Button from 'components/common/Button';

const HomePage = ({
  history,
}) => (
  <Page directionColumn>
    <Container directionRowReverse padding="20px 50px 20px 50px">
      <Button
        width="100px"
        onClick={() => history.push('/login')}
      >
        Sign In
      </Button>
    </Container>

    <Container directionColumn justifyContentCenter alignItemsCenter stretch>
      <Logo size="96px" />

      <Spacer vertical="30px" />

      <Text
        size="24px"
        weight="200"
        align="center"
      >
        Innovative payment platform enabling workers in the gig economy secure their future.
      </Text>

      <Spacer vertical="10px" />
    </Container>
  </Page>
);

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HomePage;
