import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from 'common/store';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { lightBlue } from 'material-ui/colors';
import { HomePage } from 'home';
import { LoginPage, SignupPage, VerifyPage, BankLogin } from 'signin';
import { OnboardingPage } from 'onboarding';
import { Dashboard } from 'dashboard';
import { Plaid } from 'plaid';
import PrivateRoute from './PrivateRoute';
import './globalStyles';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/verify" component={VerifyPage} />
          <PrivateRoute path="/bank-login" component={BankLogin} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/onboarding" component={OnboardingPage} />

          <Route path="/plaid" component={Plaid} />
        </Switch>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
