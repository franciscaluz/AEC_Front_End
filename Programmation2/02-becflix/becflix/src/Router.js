import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomepageScreen from './screens/HomepageScreen';
import VideoSingleScreen from './screens/VideoSingleScreen';

const AppRouter = (props) => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={HomepageScreen}/>
                <Route path="/homepage" exact component={HomepageScreen}/>
                <Route path="/video-single" exact component={VideoSingleScreen}/>
            </div>
        </Router>
    );
}

export default AppRouter;