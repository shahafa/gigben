import React from 'react';
import { Provider } from 'react-redux';
import store from 'common/store';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { lightBlue } from 'material-ui/colors';
import { DevTools } from 'common/components';
import { HomePage } from 'home';
import { LoginPage, SignupPage, VerifyPage } from 'signin';
import { OnboardingPage } from 'onboarding';
import { Dashboard } from 'dashboard';
import { logRoutesToGoogleAnalytics } from './googleAnalyticsLogger';
import PrivateRoute from './PrivateRoute';
import './globalStyles';

const theme = createMuiTheme({
  palette: createPalette({
    primary: lightBlue,
  }),
});

logRoutesToGoogleAnalytics();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/verify" component={VerifyPage} />
            <Route path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/onboarding" component={OnboardingPage} />
          </Switch>

          {process.env.NODE_ENV === 'development' && <DevTools />}
        </div>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
