import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { grey } from 'material-ui/colors';

const LogoStyle = styled.div`
  font-family: Sacramento;
  background: -webkit-linear-gradient(135deg, #5EFCE8 0%, #736EFE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5;
  ${props => props.size && `font-size: ${props.size}`};
`;

const Logo = ({ size }) => (
  <LogoStyle size={size}>Gigben</LogoStyle>
);

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Logo;
