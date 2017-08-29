import React from 'react';
import styled from 'styled-components';
import Income from './Income';
import NetPay from './NetPay';
import Deductions from './Deductions';
import TopExpenses from './TopExpenses';
import { incomeByPlatformData } from './mockData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: -90px 50px 0 50px;  
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
`;

const Row = styled.div`
  display: flex;
`;

const Cell = styled.div`
  ${props => props.flexGrow && `flex: ${props.flexGrow}`};  
`;

const Overview = () => (
  <Wrapper>
    <Row>
      <Cell flexGrow={3}>
        <Income data={incomeByPlatformData} />
      </Cell>

      <Cell flexGrow={1}>
        <NetPay />
      </Cell>
    </Row>

    <Row>
      <Cell flexGrow={3}>
        <Deductions />
      </Cell>

      <Cell flexGrow={1}>
        <TopExpenses />
      </Cell>
    </Row>
  </Wrapper>
);

export default Overview;
