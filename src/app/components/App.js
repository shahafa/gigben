import React from 'react';
import ReactGA from 'react-ga';
import { HashRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { lightBlue } from 'material-ui/colors';
import { DevTools } from 'common/components';
import { HomePage } from 'home';
import { LoginPage, SignupPage, VerifyPage } from 'signin';
import { OnboardingPage } from 'onboarding';
import PrivateRoute from './PrivateRoute';
import './globalStyles';

const theme = createMuiTheme({
  palette: createPalette({
    primary: lightBlue,
  }),
});

const logLocationToGoogleAnalytics = (location) => {
  console.log('looging to GA');
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
};

ReactGA.initialize('UA-105009613-1');

const history = createHistory();
logLocationToGoogleAnalytics(history.location);
history.listen(location => logLocationToGoogleAnalytics(location));

const App = () => (
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/verify" component={VerifyPage} />
          <PrivateRoute path="/onboarding" component={OnboardingPage} />
        </Switch>

        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
