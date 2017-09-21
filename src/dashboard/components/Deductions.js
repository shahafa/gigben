import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import OverviewControl from './OverviewControl';

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
      <Bar data={chartData} options={chartOptions} />
    </OverviewControl>
  );
};

Deductions.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Deductions;
