import React from 'react';
import styled from 'styled-components';
import { Logo, Spacer, ScrollIcon } from 'common/components';
import background from './background.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  padding: 0 15% 0 15%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  @media (max-width: 667px) {
    background-position-x: -950px;
    height: 70vh;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  height: 15%;

  @media (max-width: 667px) {
    justify-content: center;
  }  
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 45%;
  
  @media (max-width: 667px) {
    align-items: center;
    height: 85%;
  }  
`;

const Title = styled.div`
  font-size: 6.5vh;
  font-weight: 100;
  color: white;

  @media (max-width: 667px) {
    font-weight: 300;
    text-align: center;
  }
`;

const Description = styled.div`
  max-width: 40vw;
  font-size: 3.5vh;
  font-weight: 100;
  line-height: 1.7;
  color: white;

  @media (max-width: 667px) {
    text-align: center;
    max-width: 100vw;
    font-weight: 300;
  }  

  @media (max-width: 1280px) {
    max-width: 55vw;
  }  
`;

const JoinUsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 6em;
  border-radius: 12px;
  border: solid 1px #ffffff;
  font-size: 2.5vh;
  font-weight: 300;
  text-align: center;
  color: #ffffff;

  cursor: pointer;

  @media (max-width: 667px) {
    font-size: 3.5vh;
  }    
`;

const ScrollDownSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  padding-bottom: 30px;

  @media (max-width: 667px) {
    visibility: hidden;
  }    
`;

const LandingSection = () => (
  <Wrapper>
    <LogoSection>
      <Logo white size={64} />
    </LogoSection>

    <TextSection>
      <Title>Securing your future</Title>

      <Spacer vertical="5vh" />

      <Description>
        Gigben is a platform for gig economy workers to manage
        payments, benefits, expenses and taxes.
      </Description>

      <Spacer vertical="5vh" />

      <JoinUsButton>Join Us</JoinUsButton>
    </TextSection>

    <ScrollDownSection>
      <ScrollIcon />
    </ScrollDownSection>
  </Wrapper>
);

export default LandingSection;
