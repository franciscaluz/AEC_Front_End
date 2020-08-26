import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import HomepageScreen from './screens/HomepageScreen'
import InstallPWA from './components/InstallPWA';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomepageScreen} />
      </Switch>
    </>
  );
}

export default App;
