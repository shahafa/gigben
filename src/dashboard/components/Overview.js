import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlights from './Highlights';
import Income from './Income';
import NetPay from './NetPay';
import Deductions from './Deductions';
import TopExpenses from './TopExpenses';

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

const Overview = ({ data }) => (
  <Wrapper>
    <Row>
      <Cell span={6}>
        <Highlights />
      </Cell>
    </Row>

    <Row>
      <Cell span={4}>
        <Income data={data.income} />
      </Cell>

      <Cell span={2}>
        <NetPay data={data.netpay} />
      </Cell>
    </Row>

    <Row>
      <Cell span={4}>
        <Deductions data={data.deductions} />
      </Cell>

      <Cell span={2}>
        <TopExpenses data={data.expenses} />
      </Cell>
    </Row>
  </Wrapper>
);

Overview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Overview;
