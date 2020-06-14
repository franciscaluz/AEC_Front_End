import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Back } from '../assets/icn-back.svg'

class AlbumLyrics extends PureComponent {

  render() {
    const { match, location, history } = this.props;
    const albumMatch = this.props
    const { id, idTitle, name, title, background, year, length, tracks, trackList } = albumMatch
    return (
      <Wrapper>
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
              <Link to="/album/:albumId" className='btn btn-outline-primary btn-block'>
                <Back />
                  Retour
                </Link>
            </Col>
            <Col md={7} lg={8} xl={9}>
              <div>You are now at {location.pathname}</div>
              <div>{albumMatch.id}</div>
            </Col>
          </Row>
        </Container>
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

