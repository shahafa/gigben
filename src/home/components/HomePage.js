import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';
import LandingSection from './LandingSection';
import WhySection from './WhySection';
import HowItWorksSection from './HowItWorksSection';
import GetEarlyAccessSection from './GetEarlyAccessSection';
import Footer from './Footer';

class HomePage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  state={
    focusEarlyAccessEmailInput: false,
  }

  handleSigninClick = () => {
    this.props.history.push('/login');
  }

  handleJoinUsClick = () => {
    scrollToComponent(this.earlyAccessSection);
    this.setState({ focusEarlyAccessEmailInput: true });
  }

  render() {
    const { focusEarlyAccessEmailInput } = this.state;

    return (
      <div>
        <LandingSection
          onSigninClick={this.handleSigninClick}
          onJoinUsClick={this.handleJoinUsClick}
        />

        <WhySection />

        <HowItWorksSection />

        <GetEarlyAccessSection
          htmlRef={(earlyAccessSection) => { this.earlyAccessSection = earlyAccessSection; }}
          focusEmailInput={focusEarlyAccessEmailInput}
        />

        <Footer />
      </div>
    );
  }
}

export default connect()(HomePage);
