import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumBase from "../components/tests/AlbumBase";
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

const Wrapper = styled.div``