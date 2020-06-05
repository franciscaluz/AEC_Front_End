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
              <p className="text-uppercase mb-0"><strong>Album</strong></p>
              <h1 className="mb-0">{albumMatch.title}</h1>
              <h4 className="mb-0">{albumMatch.name}</h4>
              <ul className="list-unstyled d-flex justify-content-between flex-row h6">
                <li className="">{albumMatch.year}</li>
                <li className="">{albumMatch.tracks} Chansons</li>
                <li className="">{albumMatch.length}</li>
              </ul>
              <Link to="/" className="btn btn-outline-primary">
                Retour à la page principale
            </Link>

            </Col>
            <Col md={7} lg={8} xl={9}>
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
margin-bottom: 30px;

.album-card-single {
  height: 100%;
  border-radius: 7.5px;
  border: none;
  box-shadow: none;
  overflow: hidden;

  &:hover {
    .album-info-inner {
      transform: translate(0, 0);
    }
  }

    .card-body {
        padding: 0;
    }
}

.album-info {
  padding: .75rem 1.25rem;

  .h5 {
    margin-bottom: 10px;
  }

  .h6 {
    margin-bottom: 0;
    color: #ffffff;
  }

  .card-subtitle {
    color: #9a9a9a;
    text-transform: uppercase;
    font-size: 10px;
  }
}

.album-card-single-img {
  display: block;
  width: 100%;
  height: 345px;
}

.card-img-overlay {
  top: unset;
  bottom: 0;
  height: 100%;
  background: transparent;
  cursor: pointer;
  padding: 0;

  .album-info {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .album-info-inner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: #FF21B2;
    padding: 1.25rem;
    color: #ffffff;
    transform: translate(0, 100%);
    transition: all 0.3s ease;
  }
}
`
