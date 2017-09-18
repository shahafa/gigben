import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import CubesIcon from 'react-icons/lib/fa/cubes';
import { post } from 'common/utils/http';
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

class Income extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    plaidToken: PropTypes.string.isRequired,
  }

  state = {
    data: null,
  }

  componentDidMount() {
    const { plaidToken } = this.props;

    post('/v1/dashboard/income', {
      plaidPublicToken: plaidToken,
    }).then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.props;

    const chartData = data ? {
      labels: data.labels,
      datasets: data.platforms.map(platform => ({
        label: platform.name,
        backgroundColor: platform.color,
        data: platform.data,
      })),
    } : undefined;

    return (
      <OverviewControl Icon={CubesIcon} title="Income by Platform">
        <Bar data={chartData} options={chartOptions} />
      </OverviewControl>
    );
  }
}

const mapStateToProps = state => ({
  plaidToken: state.signin.plaidToken,
});

export default connect(mapStateToProps)(Income);
