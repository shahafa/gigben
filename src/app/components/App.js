import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  </Router>
);

export default App;
