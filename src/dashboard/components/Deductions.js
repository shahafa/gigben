/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import OverviewControl from './OverviewControl';

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80%;
  font-size: 14px;
  color: gray;  
`;

const chartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
    position: 'right',
  },
  scales: {
    xAxes: [{
      stacked: true,
      barPercentage: 0.2,
    }],
    yAxes: [{ stacked: true }],
  },
};

const Deductions = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: data.platforms.map(platform => ({
      label: platform.name,
      backgroundColor: platform.color,
      data: platform.data,
    })),
  };

  return (
    <OverviewControl icon="bulb" title="Deductions">
      <TextWrapper>
        We did not recognize deductions in your account :(
        <br />
        <br />
        We are working on improving our engine please try again in few days
      </TextWrapper>
      {/* <Bar data={chartData} options={chartOptions} /> */}
    </OverviewControl>
  );
};

Deductions.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Deductions;
