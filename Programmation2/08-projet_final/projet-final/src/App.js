import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomepageScreen from './screens/HomepageScreen'
import PageNotFound from './screens/PageNotFound'
import CharacterScreen from './screens/CharacterScreen';
import CharacterSingleScreen from './screens/CharacterSingleScreen';
import UserTableScreen from './screens/UserTableScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar />
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
