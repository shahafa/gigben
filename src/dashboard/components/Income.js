import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import CubesIcon from 'react-icons/lib/fa/cubes';
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

const Income = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: data.platforms.map(platform => ({
      label: platform.name,
      backgroundColor: platform.color,
      data: platform.data,
    })),
  };

  return (
    <OverviewControl Icon={CubesIcon} title="Income by Platform">
      <Bar data={chartData} options={chartOptions} />
    </OverviewControl>
  );
};

Income.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Income;
