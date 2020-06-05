import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import BaseScreen from "./BaseScreen";
import AlbumLyrics from "../components/AlbumLyrics";

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

