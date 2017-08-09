import React from 'react';
import styled from 'styled-components';
import { lightBlue } from 'material-ui/colors';

const Button = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => (props.width ? props.width : '168px')};
    height: ${props => (props.height ? props.height : '43px')};
    cursor: pointer;
    border-radius: 999px;
    font-family: 'Roboto';
    font-weight: 300;
    outline: none;
    transition: background-color .3s,color .3s,background .3s,box-shadow .1s ease-in-out;
    box-shadow: inset 0 0 0 1px ${props => (props.color ? props.color : lightBlue[500])};
    color: ${props => (props.color ? props.color : lightBlue[500])};
      
    &:hover {
      color: ${props => (props.hoverColor ? props.hoverColor : 'white')};
      background-color: ${props => (props.hoverBackgroundColor ? props.hoverBackgroundColor : lightBlue[500])};
    }

    &:active {
      background-color: ${props => (props.activeBackgroundColor ? props.activeBackgroundColor : lightBlue[700])};
    }
`;

export default props => (
  <Button
    {...props}
    role="button"
    tabIndex={0}
  />
);
