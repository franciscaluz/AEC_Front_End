import React from "react";
import styled from "styled-components/macro";
import { Card } from "react-bootstrap";

const albumCardSingle = ({ name, title, background }) => {
  return (
    <Wrapper className="col" >
      <Card className='album-card-single'>
        <div className='card-img'>
          <div className='img-wrapper'></div>
        </div>
        <Card.ImgOverlay>
          <div className='album-info'>
            <div className='album-info-inner'>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>
                {title}
              </Card.Subtitle>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Wrapper >
  )
}

export default albumCardSingle

const Wrapper = styled.div`
margin-bottom: 30px;

.album-card-single {
  height: 100%;
  border-radius: 7.5px;
  border: none;
  box-shadow: none;
  overflow: hidden;
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

.img-wrapper {
/*   background-image: url('${props => props.background}'); */
/*   background: ${props => 'url(${props.background})'}; */
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
  &:hover {
    .album-info-inner {
      transform: translate(0, 0);
    }
  }
}
`
