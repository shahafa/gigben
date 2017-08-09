import React from 'react';
import styled from 'styled-components';
import mortgage from './mortgage.svg';
import search from './search.svg';
import lightBulb from './light-bulb.svg';
import contract from './contract.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 15% 75px 15%;
  background-color: #f8f8f8;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: Sacramento;
  font-size: 7vh;
  font-weight: 300;
  margin: 0 0 40px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const ItemImage = styled.img`
  width: 13vh;
  margin-bottom: 20px;
`;

const ItemText = styled.div`
  width: 25vh;
  font-size: 2.2vh;
  text-align: center;
  color: #4a4a4a;
`;

const HowItWorksSection = () => (
  <Wrapper>
    <Title>How it Works</Title>

    <Content>
      <Item>
        <ItemImage src={mortgage} />
        <ItemText>
          Find and enroll retirement plan and health insurance
        </ItemText>
      </Item>

      <Item>
        <ItemImage src={search} />
        <ItemText>
          Get comprehensive and easy-to-understand finiancial status
        </ItemText>
      </Item>

      <Item>
        <ItemImage src={lightBulb} />
        <ItemText>
          Get personalized actionable insights to improve your finicial future
        </ItemText>
      </Item>

      <Item>
        <ItemImage src={contract} />
        <ItemText>
          Report expenses and approve auto generated tax report
        </ItemText>
      </Item>
    </Content>
  </Wrapper>
);

export default HowItWorksSection;
