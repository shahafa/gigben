import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { red } from 'material-ui/colors';
import { Container, Spacer, Text, Button, InputCenterAligned } from 'common/components';

const VerifyForm = ({
  userEmail,
  code,
  onCodeChange,
  onCodeBlur,
  errorText,
  isVerifying,
  onVerifyClick,
}) => (
  <Container directionColumn justifyContentCenter alignItemsCenter stretch>
    <Text
      size="56px"
      weight="200"
      align="center"
    >
      Verify Account
    </Text>

    <Spacer vertical="20px" />

    <Text
      align="center"
      size="20px"
      weight="300"
    >
      {`Please enter the code that we sent to: ${userEmail}`}
    </Text>

    <Spacer vertical="75px" />

    <InputCenterAligned
      autoFocus
      placeholder="XXXXXX"
      value={code}
      error={errorText !== ''}
      onChange={event => onCodeChange(event.target.value)}
      onBlur={onCodeBlur}
      onKeyPress={(event) => { if (event.key === 'Enter') onVerifyClick(); }}
    />

    <Spacer vertical="35px" />

    <Text
      align="center"
      size="16px"
      height="16px"
      weight="300"
      color={red[500]}
    >
      {errorText}
    </Text>

    <Spacer vertical="35px" />

    {isVerifying ?
      <CircularProgress size={43} />
    :
      <Button onClick={onVerifyClick}>
        Verify
      </Button>
    }

    <Spacer vertical="10px" />
  </Container>

);

VerifyForm.propTypes = {
  userEmail: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  onCodeBlur: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  onVerifyClick: PropTypes.func.isRequired,
};

export default VerifyForm;
