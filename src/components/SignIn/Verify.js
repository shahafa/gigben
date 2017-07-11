import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Input from 'material-ui/Input';
import { red } from 'material-ui/colors';
import Text from 'components/shared/Text';
import Spacer from 'components/shared/Spacer';
import Button from 'components/shared/Button';
import SigninShell from './SigninShell';

const styleSheet = createStyleSheet('Input', () => ({
  input: {
    textAlign: 'center',
  },
}));

class Verify extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userEmail: PropTypes.string.isRequired,
    isVerifying: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    onVerifyClick: PropTypes.func.isRequired,
  }

  state = {
    code: '',
    codeErrorText: '',
  }

  validateCode = () => {
    const { code } = this.state;

    if (validator.isEmpty(code)) {
      this.setState({ codeErrorText: 'Code is required' });
    } else {
      this.setState({ codeErrorText: '' });
      return true;
    }

    return false;
  };

  handleEnterKeyClick = (event) => {
    if (event.key === 'Enter') {
      this.handleVerifyClick();
    }
  }

  handleVerifyClick = () => {
    const { userEmail, onVerifyClick } = this.props;
    const { code } = this.state;

    if (this.validateCode()) {
      onVerifyClick(userEmail, code);
    }
  }

  errorText = () => {
    const { codeErrorText } = this.state;
    const { errorText } = this.props;

    if (codeErrorText !== '') {
      return codeErrorText;
    } else if (errorText !== '') {
      return errorText;
    }

    return '';
  }

  render() {
    const {
      code,
      codeErrorText,
    } = this.state;

    const {
      errorText,
      classes,
      userEmail,
      isVerifying,
    } = this.props;

    return (
      <SigninShell>
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

        <Input
          classes={{
            input: classes.input,
          }}
          autoFocus
          placeholder="XXXXXX"
          value={code}
          onChange={event => this.setState({ code: event.target.value })}
          onBlur={() => this.setState({ codeErrorText: '' })}
          onKeyPress={this.handleEnterKeyClick}
          error={codeErrorText !== '' || errorText !== ''}
        />

        <Spacer vertical="35px" />

        <Text
          align="center"
          size="16px"
          height="16px"
          weight="300"
          color={red[500]}
        >
          {this.errorText()}
        </Text>

        <Spacer vertical="35px" />

        {isVerifying ?
          <CircularProgress size={43} />
        :
          <Button onClick={this.handleVerifyClick}>
            Verify
          </Button>
        }

        <Spacer vertical="10px" />
      </SigninShell>
    );
  }
}

export default withStyles(styleSheet)(Verify);
