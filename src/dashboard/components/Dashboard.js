import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { CircularProgress } from 'material-ui/Progress';
import { logout } from 'signin/actions';
import { fetchDashboardData } from '../actions';
import Header from './Header';
import Overview from './Overview';

const Wrapper = styled.div`
  min-width: 1280px;
  min-height: 100vh;
  background-color: #eff5f9;  
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchDashboardData();
  }

  handleLogoutClick = () => {
    this.props.logout();
  }

  render() {
    const {
      data,
      loading,
    } = this.props;

    if (loading || isEmpty(data)) {
      return (
        <LoadingWrapper>
          <CircularProgress size={43} />
        </LoadingWrapper>
      );
    }

    return (
      <Wrapper>
        <Header
          onLogoutClick={this.handleLogoutClick}
          bankBalance={data.status.bankBalance}
          creditCards={data.status.creditCards}
          loans={data.status.loans}
          investments={data.status.investments}
          retiermentBalance={data.status.retiermentBalance}
        />

        <Overview data={data} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dashboard.loading,
  data: state.dashboard.data,
});

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  fetchDashboardData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout, fetchDashboardData })(Dashboard);
