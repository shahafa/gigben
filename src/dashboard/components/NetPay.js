import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import OverviewControl from './OverviewControl';

const chartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
};

const NetPay = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [{
      data: data.data,
      borderColor: '#3980B2',
      backgroundColor: 'white',
      fill: false,
    }],
  };

  return (
    <OverviewControl icon="graph" title="Net Pay">
      <Line data={chartData} options={chartOptions} />
    </OverviewControl>
  );
};

NetPay.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NetPay;
