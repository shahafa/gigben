import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { marginProps } from './propReceivers';

const LogoStyle = styled.div`
  ${marginProps}
  font-family: Sacramento;
  letter-spacing: 0.5;
  ${props => props.size && `font-size: ${props.size}`};
  ${props => (props.color ?
    `color: ${props.color};`
    :
    `background: -webkit-linear-gradient(135deg, #5EFCE8 0%, #736EFE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`
  )};  
`;

const Logo = ({ ...props }) => (
  <LogoStyle {...props}>Gigben</LogoStyle>
);

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Logo;
