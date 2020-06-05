import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import { albums } from '../constant';
import styled from "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";


class AlbumSingle extends PureComponent {
  render() {
    const { match, location, history } = this.props;
    const albumMatch = albums.find(({ id }) => id === match.params.albumId)
    return (
      < Wrapper >
        <Container fluid>
          <Row>
            <Col md={5} lg={4} xl={3}>
              <div className="card-img">
                <div className='img-wrapper' style={{ backgroundImage: albumMatch.background }}></div>
              </div>
              <p className="text-uppercase">Album</p>
              <h1 className="mb-0">{albumMatch.title}</h1>
              <h5>Par {albumMatch.name}</h5>
              <ul className="album-info h6">
                <li className="">{albumMatch.year}</li>
                <li className="">{albumMatch.tracks} Chansons</li>
                <li className="">{albumMatch.length} min</li>
              </ul>
              <Link to="/" className="btn btn-outline-primary">
                Retour
            </Link>
            </Col>
            <Col md={7} lg={8} xl={9}>
              <div className="tracklist-header">
                <Link to="#" className="btn btn-primary">Lecture</Link>
              </div>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Titre</th>
                      <th scope="col">Paroles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

/*const AlbumSingle = ({ id, idTitle, name, title, background, year, tracks, length, tracklist }) => {
 const albumTracks = { tracklist }.map((item, index) =>
    <tr key={index}>
      <th scope="row">1</th>
      <td>{item}</td>
      <td></td>
    </tr>
  ) */

/*
        <h2>You are now at {location.pathname}</h2>
        <h2>You are now at {albumMatch.id}</h2>
        <h2>You are now at {albumMatch.idTitle}</h2>
        <h2>{albumMatch.trackList}</h2>
*/
export default withRouter(AlbumSingle)

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

`
