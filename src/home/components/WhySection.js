import React, { Component } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-images';
import Section from './Section';
import dashboard from '../assets/dashboard.png';

const Text = styled.h3`
  flex: 1;
  margin: 1.15em;  
  min-width: 275px; 
  max-width: 450px;
  font-weight: 300;
  line-height: 1.4;
  color: #424242;

  @media (max-width: 667px) {
    margin: 0;
  }    
`;

const ScreenshotContainer = styled.div`
  flex: 1;
  margin: 1.15em;  
  min-width: 275px; 
  max-width: 450px;

  @media (max-width: 667px) {
    margin: 0.2em;
  }    
`;

const Screenshot = styled.img`
  width: 100%;
  margin-top: 7em;
  box-shadow: 0 0 52px 0 rgba(0, 0, 0, 0.3);
  cursor: zoom-in;

  @media (max-width: 667px) {
    margin-top: 2.5em;
  }  
`;

class WhySection extends Component {
  state = {
    lightBoxOpen: false,
  }

  render() {
    const { lightBoxOpen } = this.state;

    return (
      <Section title="Why Gigben">
        <Text>
          As a freelancer, you have more freedom and control over your schedule. But we understand
          that you also have more complications: handling your finances and staying on top of
          paperwork requires time and specialized knowledge.
          <br /><br />
          That&apos;s why we built Gigben. With Gigben, you can easily manage payments, benefits,
          expenses and tax reports across platforms all in one place. Like a pro.
        </Text>

        <ScreenshotContainer>
          <Screenshot src={dashboard} onClick={() => this.setState({ lightBoxOpen: true })} />

          <Lightbox
            images={[{ src: dashboard }]}
            isOpen={lightBoxOpen}
            onClose={() => this.setState({ lightBoxOpen: false })}
            showImageCount={false}
          />
        </ScreenshotContainer>
      </Section>
    );
  }
}

export default WhySection;
