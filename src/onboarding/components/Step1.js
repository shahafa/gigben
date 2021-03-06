import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { Container, Spacer } from 'common/components';
import StepContainer from './StepContainer';

const Step1 = ({
  getUserValue,
  setUserValue,
  onNextClick,
}) => (
  <StepContainer
    title="Tell us about yourself"
    onNextClick={onNextClick}
    hideBack
  >
    <Container directionColumn width="360px">
      <TextField
        autoFocus
        label="First Name"
        value={getUserValue('firstName')}
        onChange={event => setUserValue('firstName', event.target.value)}
      />

      <Spacer vertical="12px" />

      <TextField
        label="Last Name"
        value={getUserValue('lastName')}
        onChange={event => setUserValue('lastName', event.target.value)}
      />

      <Spacer vertical="12px" />

      <TextField
        label="Mobile Phone Number"
        value={getUserValue('phoneNumber')}
        onChange={event => setUserValue('phoneNumber', event.target.value)}
      />

      <Spacer vertical="12px" />

      <TextField
        label="Country of Citizenship"
        value={getUserValue('citizenship')}
        onChange={event => setUserValue('citizenship', event.target.value)}
      />
    </Container>
  </StepContainer>
);

Step1.propTypes = {
  getUserValue: PropTypes.func.isRequired,
  setUserValue: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Step1;
