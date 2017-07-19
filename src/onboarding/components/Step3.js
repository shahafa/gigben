import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input } from 'common/components';
import StepContainer from './StepContainer';

const Step3 = ({
  getUserValue,
  setUserValue,
  onNextClick,
  onBackClick,
}) => (
  <StepContainer
    title="What is your social security number?"
    onNextClick={onNextClick}
    onBackClick={onBackClick}
  >
    <Container directionColumn width="360px">
      <Input
        textAlignCenter
        autoFocus
        placeholder="XXX - XX - XXXX"
        value={getUserValue('socialSecurityNumber')}
        onChange={event => setUserValue('socialSecurityNumber', event.target.value)}
      />
    </Container>
  </StepContainer>
);

Step3.propTypes = {
  getUserValue: PropTypes.func.isRequired,
  setUserValue: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default Step3;
