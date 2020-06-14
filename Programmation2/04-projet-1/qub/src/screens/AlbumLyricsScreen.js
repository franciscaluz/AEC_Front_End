import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumLyrics from "../components/AlbumLyrics"

class AlbumLyricsScreen extends PureComponent {

    render() {


        return (
            <BaseScreen>
                <AlbumLyrics />
            </BaseScreen>
        );
    }
}

export default withRouter(AlbumLyricsScreen);

