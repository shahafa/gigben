import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isTokenExpired } from 'common/utils/jwtHelper';

const PrivateRoute = ({
  token,
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthenticated && !isTokenExpired(token)) {
        return (<Component {...props} />);
      }

      return (<Redirect to={{ pathname: '/' }} />);
    }}
  />
);

PrivateRoute.propTypes = {
  token: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

const mapStateToProps = state => ({
  token: state.signin.token,
  isAuthenticated: state.signin.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
