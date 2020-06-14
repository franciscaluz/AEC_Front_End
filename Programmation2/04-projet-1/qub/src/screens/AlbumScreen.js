import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumSingle from "../components/AlbumSingle";

class AlbumSingleScreen extends PureComponent {
  render() {
    const { match } = this.props;
    const albumMatch = albums.find(({ id }) => id === match.params.albumId)
    const { name, title, length, year, background, tracks, trackList } = albumMatch
    return (
      <BaseScreen>
        <AlbumSingle
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

export default AlbumSingleScreen;
