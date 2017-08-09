import React from 'react';
import styled from 'styled-components';
import email from './email.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 15% 75px 15%;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: Sacramento;
  font-size: 7vh;
  font-weight: 300;
  margin: 0 0 40px 0;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 30px;
  width: 20vw;
  border: solid 1px #979797;
  font-size: 14px;
  background: url(${email}) no-repeat scroll 5px;
  background-size: 1.5vw 1.5vw;
  padding-left: 2.5vw;  
`;

const Button = styled.div`
  width: 7vw;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

const GetEarlyAccessSection = () => (
  <Wrapper>
    <Title>Get Early Access</Title>

    <Content>
      <Input />
      <Button>Join Us</Button>
    </Content>
  </Wrapper>
);

export default GetEarlyAccessSection;
