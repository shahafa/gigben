import React from 'react';
import styled from 'styled-components';
import Income from './Income';
import NetPay from './NetPay';
import Deductions from './Deductions';
import TopExpenses from './TopExpenses';
import { incomeByPlatformData, net, deductions, expenses } from './mockData';

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
  ${props => props.span && `flex: ${props.span}`};  
`;

const Overview = () => (
  <Wrapper>
    <Row>
      <Cell span={4}>
        <Income data={incomeByPlatformData} />
      </Cell>

      <Cell span={2}>
        <NetPay data={net} />
      </Cell>
    </Row>

    <Row>
      <Cell span={4}>
        <Deductions data={deductions} />
      </Cell>

      <Cell span={2}>
        <TopExpenses data={expenses} />
      </Cell>
    </Row>
  </Wrapper>
);

export default Overview;
