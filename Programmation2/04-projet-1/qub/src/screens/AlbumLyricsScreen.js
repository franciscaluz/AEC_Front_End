import React, { PureComponent } from "react";
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumLyrics from "../components/AlbumLyrics"

class AlbumLyricsScreen extends PureComponent {

    render() {
        const { match } = this.props;
        const albumMatch = albums.find(({ id }) => id === match.params.albumId)
        const { name, title, length, year, background, tracks, trackList } = albumMatch

        return (
            <BaseScreen>
                <AlbumLyrics
                    name={name}
                    title={title}
                    year={year}
                    tracks={tracks}
                    length={length}
                    background={background}
                    trackList={trackList}
                />
            </BaseScreen>
        );
    }
}

export default AlbumLyricsScreen;

