import React from 'react';
import PropTypes from 'prop-types';
import Humanize from 'humanize-plus';
import { Doughnut } from 'react-chartjs-2';
import OverviewControl from './OverviewControl';

const chartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
    position: 'right',
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => `${data.labels[tooltipItem.index]}: ${Humanize.intComma(data.datasets[0].data[tooltipItem.index])}$`,
    },
  },
};

const TopExpenses = ({ data }) => {
  const chartData = {
    labels: data.map(expense => expense.name),
    datasets: [{
      data: data.map(expense => expense.value),
      backgroundColor: ['#FF6383', '#FF9F40', '#FFCD56', '#4AC0C0', '#34A2EB'],
    }],
  };

  return (
    <OverviewControl icon="eye" title="Top Expenses by Category">
      <Doughnut data={chartData} options={chartOptions} />
    </OverviewControl>
  );
};

TopExpenses.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TopExpenses;
