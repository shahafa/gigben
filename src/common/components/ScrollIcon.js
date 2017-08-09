import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
`;

const ScrollIcon = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 70px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;

  &:before {
    position: absolute;
    left: 50%;    
    content: '';
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation: ${scroll} 1.5s linear infinite;
  }
`;

export default ScrollIcon;
