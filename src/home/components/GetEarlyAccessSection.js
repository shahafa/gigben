import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './Section';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 0.2em;
`;

const Input = styled.input`
  flex: 1;
  height: 35px;
  max-width: 250px;
  border: solid 1px #424242;
  font-size: 14px;
  padding-left: 10px;  
`;

const Button = styled.div`
  height: 35px;
  padding: 0 20px 0 20px;
  line-height: 35px;
  text-align: center;
  background-color: #424242;
  color: white;
  font-size: 0.9em;
  font-weight: 300;
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
  font-size: 1em;
  color: #424242;
`;

class GetEarlyAccessSection extends Component {
  static propTypes = {
    htmlRef: PropTypes.func,
    focusEmailInput: PropTypes.bool,
  }

  static defaultProps = {
    htmlRef: null,
    focusEmailInput: false,
  };

  state = {
    email: '',
    signedUp: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.focusEmailInput && this.emailInput) {
      this.emailInput.focus();
    }
  }

  handleJoinUsClick = () => {
    const { email } = this.state;

    fetch('/v1/addEarlyAccessUser/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    this.setState({ signedUp: true });
  }

  render() {
    const { htmlRef } = this.props;
    const { email, signedUp } = this.state;

    return (
      <Section htmlRef={htmlRef} title="Get early access">
        {!signedUp ?
          <Wrapper>
            <Input
              placeholder="Email"
              innerRef={(emailInput) => { this.emailInput = emailInput; }}
              value={email}
              onChange={event => this.setState({ email: event.target.value })}
            />
            <Button onClick={this.handleJoinUsClick}>Join Us</Button>
          </Wrapper> :
          <Wrapper>
            <Text>{'Thanks for signing up for early access, we\'ll contact you soon with more details'}</Text>
          </Wrapper>
        }
      </Section>
    );
  }
}

export default GetEarlyAccessSection;
