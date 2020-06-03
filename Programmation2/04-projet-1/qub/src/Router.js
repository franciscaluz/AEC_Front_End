import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import HomepageScreen from './screens/HomepageScreen';
import AlbumSingleScreen from './screens/AlbumSingleScreen'


const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/home" exact component={HomepageScreen} />
                <Route path="/album-single" exact component={AlbumSingleScreen} />

            </Switch>
        </Router>
    );
}

export default AppRouter;