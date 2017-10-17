import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import Humanize from 'humanize-plus';
import OverviewControl from './OverviewControl';

const colors = ['#FF6383', '#FF9F40', '#FFCD56', '#4AC0C0', '#34A2EB'];

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
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        console.log(tooltipItem);
        console.log(data);
        return `${data.datasets[tooltipItem.datasetIndex].label}: ${Humanize.intComma(tooltipItem.yLabel)}$`;
      },
    },
  },
};

const Income = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: data.platforms.map((platform, idx) => ({
      label: platform.name,
      backgroundColor: colors[idx % 5],
      data: platform.data,
    })),
  };

  return (
    <OverviewControl icon="layers" title="Income by Platform">
      <Bar data={chartData} options={chartOptions} />
    </OverviewControl>
  );
};

Income.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Income;
