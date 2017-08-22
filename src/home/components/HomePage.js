import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import LandingSection from './LandingSection';
import WhySection from './WhySection';
import HowItWorksSection from './HowItWorksSection';
import GetEarlyAccessSection from './GetEarlyAccessSection';
import Footer from './Footer';

class HomePage extends Component {
  state={
    focusEarlyAccessEmailInput: false,
  }

  handleJoinUsClick = () => {
    scrollToComponent(this.earlyAccessSection);
    this.setState({ focusEarlyAccessEmailInput: true });
  }

  render() {
    const { focusEarlyAccessEmailInput } = this.state;

    return (
      <div>
        <LandingSection onJoinUsClick={this.handleJoinUsClick} />

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

export default HomePage;
