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
          We understand that unlike a regular employee as a gig economy worker, you need to take
          care of your financial future and it takes time and requires specialties.
          <br /><br />
          This is why we built Gigben, with Gigben you can manage payments from different platforms,
          benefits, expenses and tax reports in one place and in an easy way like a pro!
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
