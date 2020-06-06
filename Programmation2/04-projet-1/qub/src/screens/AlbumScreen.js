import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumSingle from "../components/AlbumSingle";

class AlbumSingleScreen extends PureComponent {

  render() {
    const { match } = this.props;
    const albumMatch = albums.find(({ id }) => id === match.params.albumId)
    const { name, title, length, year, background, tracks, tracklist } = albumMatch
    return (
      <BaseScreen>
        <AlbumSingle
          name={name}
          title={title}
          year={year}
          tracks={tracks}
          length={length}
          background={background}
          trackList={tracklist}
        />
      </BaseScreen>
    );
  }
}

export default withRouter(AlbumSingleScreen);

