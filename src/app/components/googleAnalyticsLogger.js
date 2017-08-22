import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

const logLocationToGoogleAnalytics = (location) => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
};

export const logRoutesToGoogleAnalytics = () => {
  ReactGA.initialize('UA-105009613-1');

  const history = createHistory();
  logLocationToGoogleAnalytics(history.location);

  history.listen(location => logLocationToGoogleAnalytics(location));
};
