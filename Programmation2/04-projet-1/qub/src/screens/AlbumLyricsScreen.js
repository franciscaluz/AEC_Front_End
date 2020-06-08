import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumBase from "../components/AlbumBase";
import AlbumLyrics from "../components/AlbumLyrics"


class AlbumLyricsScreen extends PureComponent {

    render() {
        return (
            <BaseScreen>
                <AlbumBase>
                    <AlbumLyrics />
                </AlbumBase>
            </BaseScreen>
        );
    }
}

export default withRouter(AlbumLyricsScreen);

