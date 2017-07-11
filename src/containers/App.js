import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { lightBlue } from 'material-ui/colors';
import DevTools from 'components/DevTools';
import Temp from 'components/Temp';
import SigninPage from 'containers/SigninPage';

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
          <Route path="/signin" component={SigninPage} />
        </Switch>

        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
