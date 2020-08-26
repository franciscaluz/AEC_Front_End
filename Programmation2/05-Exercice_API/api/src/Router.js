import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomepageScreen from './screens/HomepageScreen';


const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomepageScreen} />
            </Switch>
        </Router>
    );
}

export default AppRouter;