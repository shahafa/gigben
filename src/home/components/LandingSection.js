import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo } from 'common/components';
import background from '../assets/background.png';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

    @media (max-width: 667px) {
      background-position-x: -100px;
    }       
  }
`;

const H1 = styled.h1`
  font-weight: 100;
  color: white;
`;

const H2 = styled.h2`
  width: 40vw;
  font-weight: 100;
  text-align: center;
  color: white;
  line-height: 1.5em;

  @media (max-width: 667px) {
    width: 90vw;
  }    
`;

const Button = styled.div`
  margin-top: 40px;
  border-radius: 40px;
  color: white;
  border: 2px solid white;
  transition: all .2s ease-in-out;
  font-weight: 300;
  font-size: 1.2em;  
  cursor: pointer;
  padding: 8px 30px;

  &:hover {
    color: black;
    background-color: white;
  }
`;

const LandingSection = ({ onJoinUsClick }) => (
  <Main>
    <Logo size="5em" color="white" />
    <H1>Securing your future</H1>
    <H2>
      Gigben is a platform for gig economy workers to manage payments, benefits, expenses
      and taxes.
    </H2>
    <Button onClick={onJoinUsClick}>Join Us</Button>
  </Main>
);

LandingSection.propTypes = {
  onJoinUsClick: PropTypes.func.isRequired,
};

export default LandingSection;
