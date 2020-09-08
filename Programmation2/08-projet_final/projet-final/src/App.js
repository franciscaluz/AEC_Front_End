import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomepageScreen from './screens/HomepageScreen'
import PageNotFound from './screens/PageNotFound'
import CharacterScreen from './screens/CharacterScreen';
import CharacterSingleScreen from './screens/CharacterSingleScreen';
import UserTableScreen from './screens/UserTableScreen';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomepageScreen} />
        <Route path="/character" exact component={CharacterScreen} />
        <Route path="/character/:id"><CharacterSingleScreen /></Route>
        <Route path="/user-table" component={UserTableScreen} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
