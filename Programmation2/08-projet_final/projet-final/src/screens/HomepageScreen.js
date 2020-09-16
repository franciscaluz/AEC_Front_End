import React from 'react';
import styled from 'styled-components/macro'
import BaseScreen from './BaseScreen';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import HomeImg from '../assets/images/rickandmorty-homepage.png'
import imgBg from '../assets/images/homepage-blob.svg'

const HomepageScreen = () => {
    return (
        <BaseScreen>
            <Wrapper>
                <Row className="align-content-stretch">
                    <Col md={6}>
                        <div className="homepage-text-wrapper">
                            <div>
                                <h1 className="display-4">Le grand Wiki de la série Rick & Morty</h1>
                                <p>Retrouvez toute la documentation de la série partagée gratuitement par nos utilisateurs et contribuez vous-même à l'enrichir en publiant ou modifiant de nouvelles informations!</p>
                                <div className="button-container">
                                    <Link to="/character" className="btn btn-theme-primary-alt">Voir les personnages</Link>
                                    <Link to="#" className="btn btn-theme-secondary-alt">Voir les planètes</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="homepage-img-wrapper">
                            <img src={HomeImg} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Wrapper>
        </BaseScreen>
    );
}

export default HomepageScreen;

const Wrapper = styled.div`
.homepage-text-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    p {
        font-size: 16px;
        margin-bottom: 30px;
    }
}

.homepage-img-wrapper {
    height: 100%;
    background-image: url(${imgBg});
    background-repeat: no-repeat;
    background-size: contain;
}

.button-container {
    .btn:first-of-type {
        margin-right: 15px;
    }
}

`