import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from 'signin/actions';
import Header from './Header';
import Overview from './Overview';

const Wrapper = styled.div`
  min-width: 1280px;
  min-height: 100vh;
  background-color: #eff5f9;  
`;

class Dashboard extends Component {
  handleLogoutClick = () => {
    this.props.logout();
  }

  render() {
    return (
      <Wrapper>
        <Header
          onLogoutClick={this.handleLogoutClick}
          bankBalance={1234}
          creditCards={345}
          loans={18900}
          investments={27000}
          retiermentBalance={13245}
        />

        <Overview />
      </Wrapper>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Dashboard);
