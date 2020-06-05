import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";

const AlbumSingle = ({ id, idTitle, name, title, background, year, tracks, length, tracklist }) => {
  return (
    <Wrapper>
      <Container fluid>
        <div className='page-header'>
          <Row>
            <Col md={5} lg={4} xl={3}>
              <div className="card-img">
                <div className='img-wrapper' style={{ backgroundImage: background }}></div>
              </div>
              <p className="text-uppercase mb-0"><strong>Album</strong></p>
              <h1 className="mb-0">{title}</h1>
              <h4 className="mb-0">{name}</h4>
              <ul className="list-unstyled d-flex flex-row h6">
                <li className="">{year}</li>
                <li className="">{tracks} Chansons</li>
                <li className="">{length}</li>
              </ul>
              <Link to="/home" className="btn btn-outline-primary">
                Retour à la page principale
              </Link>

            </Col>
            <Col md={7} lg={8} xl={9}>

            </Col>
          </Row>
        </div>
      </Container>
    </Wrapper>
  )
}

export default AlbumSingle

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
