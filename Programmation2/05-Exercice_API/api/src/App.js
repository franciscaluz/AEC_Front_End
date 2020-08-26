import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomepageScreen from './screens/HomepageScreen'

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
