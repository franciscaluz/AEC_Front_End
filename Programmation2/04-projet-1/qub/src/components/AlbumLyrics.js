import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { albums } from '../constant';
import { Container, Row, Col } from "react-bootstrap";

class AlbumLyrics extends PureComponent {

  render() {
    const { match, history, location } = this.props;
    const albumMatch = albums.find(({ id }) => id === match.params.albumId)
    /* const songMatch = albums.find(({ id }) => id === match.params.lyricsId) */
    return (
      <Wrapper >
        <h2>{albumMatch.name}</h2>
        <h2>{location.pathname}</h2>

      </Wrapper >
    );
  }
}

export default withRouter(AlbumLyrics)

const Wrapper = styled.div`
.card-img {
  margin-bottom: 30px;
}

.album-info {
  padding-left: 0;
  list-style:none;
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    margin-right: 15px;
    border-right: 2px solid;
    padding-right: 15px;

    &:last-child{
      border-right:0;
      padding-right: 0;
      margin-right:0;
    }
  }
}

.tracklist-header {
  margin-bottom: 15px;
}

.table {
  table-layout: fixed;
  border-collapse: collapse;

  td, th {
    &:nth-child(2){

    }
  }
}

`

