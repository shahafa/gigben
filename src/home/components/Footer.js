import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15% 0 15%;
  background-color: black;
  font-size: 14px;
  font-weight: 300;
  color: white;
`;

const Footer = () => (
  <StyledFooter>
    All rights reserved to Gigben 2017
  </StyledFooter>
);

export default Footer;
