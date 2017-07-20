import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { Container, Spacer } from 'common/components';
import StepContainer from './StepContainer';

const Step2 = ({
  getUserValue,
  setUserValue,
  onNextClick,
  onBackClick,
}) => (
  <StepContainer
    title="What is your home address?"
    onNextClick={onNextClick}
    onBackClick={onBackClick}
  >
    <Container directionColumn width="360px">
      <TextField
        autoFocus
        label="Street Address"
        value={getUserValue('streetAddress1')}
        onChange={event => setUserValue('streetAddress1', event.target.value)}
      />

      <Spacer vertical="12px" />

      <TextField
        label="Apt. or Suite # (optional)"
        value={getUserValue('streetAddress2')}
        onChange={event => setUserValue('streetAddress2', event.target.value)}
      />

      <Spacer vertical="12px" />

      <TextField
        label="City"
        value={getUserValue('city')}
        onChange={event => setUserValue('city', event.target.value)}
      />

      <Spacer vertical="12px" />

      <TextField
        label="State"
        value={getUserValue('state')}
        onChange={event => setUserValue('state', event.target.value)}
      />

      <Spacer vertical="12px" />

      <TextField
        label="ZIP Code"
        value={getUserValue('zipCode')}
        onChange={event => setUserValue('zipCode', event.target.value)}
      />
    </Container>
  </StepContainer>
);

Step2.propTypes = {
  getUserValue: PropTypes.func.isRequired,
  setUserValue: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default Step2;
