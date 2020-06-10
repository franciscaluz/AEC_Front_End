import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import HomepageScreen from './screens/HomepageScreen';
import AlbumScreen from './screens/AlbumScreen';
import AlbumLyricsScreen from './screens/AlbumLyricsScreen';

const AppRouter = (props) => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/home" exact component={HomepageScreen} />
                <Route path={`/album/:albumId`} component={AlbumScreen} />
                <Route path={`/lyrics/:albumId/:lyricsId`} component={AlbumLyricsScreen} />
            </Switch>
        </Router>
    );
}

export default AppRouter;

{/* <Route path='/album' component={Album}>
<Route path='/album/:albumId' component={AlbumScreen} />
<Route path='album/:albumId/:somethin' component={AlbumLyricsScreen} />
</Route> */}