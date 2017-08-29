import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Overview from './Overview';

const Wrapper = styled.div`
  min-width: 1280px;
  min-height: 100vh;
  background-color: #eff5f9;  
`;

const Dashboard = () => (
  <Wrapper>
    <Header
      bankBalance={1234}
      creditCards={345}
      loans={18900}
      investments={27000}
      retiermentBalance={13245}
    />
    <Overview />
  </Wrapper>
);

export default Dashboard;
