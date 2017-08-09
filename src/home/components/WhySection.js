import React from 'react';
import styled from 'styled-components';
import dashboard from './dashboard.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 75px 15% 75px 15%;
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
  flex-wrap: wrap;
`;

const Text = styled.div`
  flex: 1;
  min-width: 275px; 
  font-size: 3vh;
  font-weight: 300;
  line-height: 1.4;
  color: #4a4a4a;
  margin-bottom: 15vh;
  margin-right: 20px;

  @media (max-width: 667px) {
    margin: 0 0 50px 0;
  }  
`;

const Screenshot = styled.div`
  flex: 1;
  min-width: 275px; 
  margin: 15vh 0 0 20px;
  box-shadow: 0 0 52px 0 rgba(0, 0, 0, 0.3);

  @media (max-width: 667px) {
    margin: 0;
  }
`;

const WhySection = () => (
  <Wrapper>
    <Title>Why Gigben</Title>

    <Content>
      <Text>
        We understand that unlike a regular employee as a gig economy worker, you need to take care 
        of your finicial future and it takes time and requires specialties.
        <br /><br />
        This is why we built Gigben, with Gigben you can manage payaments from diffrenet platforms, 
        benefits, expenses and tax reports in one place and in easy way like a pro!
      </Text>

      <Screenshot>
        <img src={dashboard} alt="" style={{ width: '100%', height: '100%' }} />
      </Screenshot>
    </Content>
  </Wrapper>
);

export default WhySection;
