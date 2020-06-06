import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import { albums } from '../constant';
import styled from "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";


class AlbumSingle extends PureComponent {

  render() {
    const { name, title, year, length, background, tracks, tracklist } = this.props;

    let list = tracklist.map(function (index) {
      if (tracklist.lyrics === 0) {
        return (
          < tr >
            <td key={index}>{tracklist.song}</td>
            <td key={index}>{tracklist.lyrics}Non disponible</td>
          </tr >
        )
      } else {
        return (
          <tr>
            <td key={index}>{tracklist.song}</td>
            <td key={index}>
              {tracklist.lyrics}
              <Link to="/lyrics/${id}/${idTitle}/${tracklist.song}" className="btn btn-primary">Voir</Link>
            </td>
          </tr >
        )
      }
    })

    return (
      <Wrapper >
        <Container fluid>
          <Row>
            <Col md={5} lg={4} xl={3}>
              <div className="card-img">
                <div className='img-wrapper' style={{ backgroundImage: background }}></div>
              </div>
              <p className="text-uppercase">Album</p>
              <h1 className="mb-0">{title}</h1>
              <h5>Par {name}</h5>
              <ul className="album-info h6">
                <li className="">{year}</li>
                <li className="">{tracks} Chansons</li>
                <li className="">{length} min</li>
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
                      {this.props.tracklist}
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper >
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
