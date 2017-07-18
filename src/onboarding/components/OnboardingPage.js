import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class OnboardingPage extends Component {
  state ={
    step: 1,
    user: {},
  }

  getUserValue = key => this.state.user[key] || ''

  setUserValue = (key, value) => {
    this.setState({
      user: {
        ...this.state.user,
        [key]: value,
      },
    });
  }

  handleNextClick = () => {
    this.setState({ step: this.state.step + 1 });
  }

  handleBackClick = () => {
    this.setState({ step: this.state.step - 1 });
  }

  render() {
    const { step } = this.state;

    if (step === 1) {
      return (
        <Step1
          getUserValue={this.getUserValue}
          setUserValue={this.setUserValue}
          onNextClick={this.handleNextClick}
        />
      );
    } else if (step === 2) {
      return (
        <Step2
          getUserValue={this.getUserValue}
          setUserValue={this.setUserValue}
          onNextClick={this.handleNextClick}
          onBackClick={this.handleBackClick}
        />
      );
    } else if (step === 3) {
      return (
        <Step3
          getUserValue={this.getUserValue}
          setUserValue={this.setUserValue}
          onNextClick={this.handleNextClick}
          onBackClick={this.handleBackClick}
        />
      );
    }

    return null;
  }
}

export default OnboardingPage;
