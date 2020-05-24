import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import HomepageScreen from './screens/HomepageScreen';


const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/home" exact component={HomepageScreen} />
            </Switch>
        </Router>
    );
}

export default AppRouter;