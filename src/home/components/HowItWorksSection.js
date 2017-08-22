import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import analytics from '../assets/analytics.svg';
import home from '../assets/home.svg';
import idea from '../assets/idea.svg';
import tax from '../assets/tax.svg';

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2em;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 667px) {
    margin-bottom: 65px;
  }
`;

const ItemImage = styled.img`
  width: 4em;
  height: 4em;
  margin-bottom: 20px;
`;

const ItemText = styled.div`
  width: 25vh;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  text-align: center;
  color: #4a4a4a;
`;

const HowItWorksSection = () => (
  <Section title="How it works" backgroundColor="#f8f8f8">
    <Content>
      <Item>
        <ItemImage src={home} />
        <ItemText>
          Find and enroll benefits including retirement and health insurance
        </ItemText>
      </Item>

      <Item>
        <ItemImage src={analytics} />
        <ItemText>
          Get comprehensive and easy-to-understand finiancial visibility
        </ItemText>
      </Item>

      <Item>
        <ItemImage src={idea} />
        <ItemText>
          Get personalized actionable insights to improve your financial future
        </ItemText>
      </Item>

      <Item>
        <ItemImage src={tax} />
        <ItemText>
          Approve automatic tax withholding
        </ItemText>
      </Item>
    </Content>
  </Section>
);

export default HowItWorksSection;
