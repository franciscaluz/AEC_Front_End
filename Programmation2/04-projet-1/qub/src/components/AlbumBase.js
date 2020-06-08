import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { albums } from '../constant'
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Back } from "../assets/icn-back.svg";

class AlbumBase extends PureComponent {

  render() {
    const { match } = this.props;
    const albumMatch = albums.find(({ id }) => id === match.params.albumId)
    const { id, idTitle, name, title, length, year, background, tracks, trackList } = albumMatch
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
              <Link to="/" className='btn btn-outline-primary btn-block'>
                <Back />
                Retour
                </Link>
            </Col>
            <Col md={7} lg={8} xl={9}>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </Wrapper >
    );
  }
}

export default withRouter(AlbumBase)

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

  a {
    margin-right: 10px;
  }
}

.table {
  thead tr th {
    &:nth-child(3) {
      text-align: right;
    }
  }
  thead th {
    text-transform: uppercase;
    border-bottom: 1px solid #dee2e6;
    font-size: 12px;
  }
  td, th {
    vertical-align: middle;

    &:nth-child(1){
      width: 5%;  
    }
    &:nth-child(2){
      width: 80%;  
    }
    &:nth-child(3){
      text-align: right;  
    }

  }
}

`
