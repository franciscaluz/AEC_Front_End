import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { albums } from '../constant';
import { Container, Row, Col } from "react-bootstrap";

class AlbumLyrics extends PureComponent {

  render() {
    const albumMatch = this.props
    const { id, idTitle, name, title, background, year, length, tracks, trackList } = albumMatch
    return (
      <Wrapper >
        <h2>{name}</h2>

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

