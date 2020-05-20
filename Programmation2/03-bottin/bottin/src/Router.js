import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import HomepageScreen from './screens/HomepageScreen';


const AppRouter = (props) => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={LoginScreen}/>
                <Route path="/homepage" exact component={HomepageScreen}/>
            </div>
        </Router>
    );
}

export default AppRouter;