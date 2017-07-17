import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Spacer } from 'common/components';
import OnboardingShell from './OnboardingShell';


class Page1 extends Component {
  static propTypes = {
    onBackClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
  }

  handleNextClick = () => {
    console.log(this.firstNameInput);
  };

  render() {
    const { onBackClick } = this.props;

    return (
      <OnboardingShell
        title="Tell us about yourself"
        onBackClick={onBackClick}
        onNextClick={this.handleNextClick}
      >
        <Container directionColumn width="360px">
          <Input
            autoFocus
            label="First Name"
            ref={(firstNameInput) => { this.firstNameInput = firstNameInput; }}
          />

          <Spacer vertical="12px" />

          <Input
            label="Last Name"
          />

          <Spacer vertical="12px" />

          <Input
            label="Mobile Phone Number"
          />

          <Spacer vertical="12px" />

          <Input
            label="Country of Citizenship"
          />
        </Container>
      </OnboardingShell>
    );
  }
}

export default Page1;
