import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo } from 'common/components';
import background from '../assets/background.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 0;

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
    position: absolute;
    top: 0;
    
    @media (max-width: 667px) {
      background-position-x: -150px;
    }       
  }  
`;

const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 75px;
  padding: 30px 50px 0 0;

  @media (max-width: 667px) {
    visibility: hidden;
  }  
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -75px;
`;

const H1 = styled.h1`
  font-weight: 100;
  color: white;

  @media (max-width: 667px) {
    font-weight: 300;
  }
`;

const H2 = styled.h2`
  width: 40vw;
  font-weight: 100;
  text-align: center;
  color: white;
  line-height: 1.5em;
  margin-bottom: 40px;
  
  @media (max-width: 667px) {
    width: 90vw;
    font-weight: 300;    
  }    
`;

const SinginButton = styled.div`
  width: 100px;
  height: 40px;
  line-height: 37px;
  border-radius: 40px;
  color: white;
  border: 2px solid white;
  transition: all .2s ease-in-out;
  font-weight: 300;
  font-size: 1em;  
  cursor: pointer;
  text-align: center;

  @media (max-width: 667px) {
    visibility: hidden;
  }

  &:hover {
    color: black;
    background-color: white;
  }
`;

const Button = styled.div`
  width: 130px;
  border-radius: 40px;
  color: white;
  border: 2px solid white;
  transition: all .2s ease-in-out;
  font-weight: 300;
  font-size: 1.2em;  
  cursor: pointer;
  padding: 8px 30px;
  text-align: center;

  @media (max-width: 667px) {
    visibility: hidden;
  }

  &:hover {
    color: black;
    background-color: white;
  }
`;

const LandingSection = ({
  onJoinUsClick,
  onSigninClick,
}) => (
  <Wrapper>
    <Header>
      <SinginButton onClick={onSigninClick}>Sign In</SinginButton>
    </Header>

    <Main>
      <Logo size="5em" color="white" />
      <H1>Securing your future</H1>
      <H2>
        Gigben is a platform for gig economy workers to manage payments, benefits, expenses
        and taxes.
      </H2>
      <Button onClick={onJoinUsClick}>Join Us</Button>
    </Main>
  </Wrapper>
);

LandingSection.propTypes = {
  onSigninClick: PropTypes.func.isRequired,
  onJoinUsClick: PropTypes.func.isRequired,
};

export default LandingSection;
