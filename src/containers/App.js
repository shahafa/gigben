import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { lightBlue } from 'material-ui/colors';
import DevTools from 'components/common/DevTools';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import VerifyPage from './VerifyPage';
import Temp from '../components/Temp';

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
          <Route exact path="/" component={Temp} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/verify" component={VerifyPage} />
          <Route exact path="/temp" component={Temp} />
        </Switch>

        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
