import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import BaseScreen from './BaseScreen'
import { withRouter, useParams, Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';
import CharacterEditModal from '../components/modals/CharacterEditModal';
import { FiArrowLeftCircle } from "react-icons/fi";

const CharacterSingleScreen = () => {
    const [donneesRecues, setDonneesRecues] = useState({});
    const characterId = useParams().id;

    useEffect(() => {
        async function getPokemonInfos() {
            try {
                let url = 'http://localhost:3001/characters/'
                const response = await fetch(url + characterId);
                const reponseDeApi = await response.json();
                setDonneesRecues(reponseDeApi);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getPokemonInfos();
    }, [characterId]);
    console.log("donneesRecues : " + donneesRecues);

    return (
        <BaseScreen>
            <Wrapper className="character-single-wrapper">
                <Row>
                    <Col sm="6">
                        <div className="character-single-image-wrapper">
                            <div className="image-ratio-1">
                                <div className="img-wrapper" style={{ backgroundImage: `url(${donneesRecues.image})` }}></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6">
                        <h2>{donneesRecues.name} {donneesRecues.id}</h2>
                        <span className="character-page-field-title">Statut</span>
                        <p>{donneesRecues.status}</p>
                        <span className="character-page-field-title">Genre</span>
                        <p>{donneesRecues.gender}</p>
                        <span className="character-page-field-title">Espèce</span>
                        <p>{donneesRecues.species}</p>
                        <span className="character-page-field-title">Type</span>
                        <p>{donneesRecues.type ? donneesRecues.type = "" : "--"}</p>
                        <span className="character-page-field-title">Planète d'origine</span>
                        <p>{donneesRecues.location}</p>
                        <span className="character-page-field-title">Emplacement</span>
                        <p>{donneesRecues.origin}</p>
                    </Col>
                </Row>
                <div className="button-container">
                    <Link to="/character" className="btn btn-theme-primary"><span className="icon"><FiArrowLeftCircle /></span>Retour</Link>
                    <CharacterEditModal />
                </div>
            </Wrapper>
        </BaseScreen>
    );
}

export default withRouter(CharacterSingleScreen);
const Wrapper = styled.div`
padding: 30px;
border-radius: 10px;
overflow: hidden;
box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.2);

.character-single-image-wrapper {
    margin-bottom: 30px;
}

.character-page-field-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.button-container {
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: 
}

`