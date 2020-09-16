import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import BaseScreen from './BaseScreen'
import { withRouter, Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
//import { API } from "../constantes";
import { FiTrash2, FiEye } from 'react-icons/fi';
import CharacterAddModal from '../components/modals/CharacterAddModal';

const CharacterScreen = (props) => {
    const [donneesRecues, setDonneesRecues] = useState([]);

    useEffect(() => {
        async function getPokemon() {
            try {
                const response = await fetch("http://localhost:3001/characters");
                const reponseDeApi = await response.json();
                setDonneesRecues(reponseDeApi);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getPokemon();
    }, []);

    return (
        <BaseScreen>
            <Wrapper>
                <div className="page-header">
                    <h1 className="page-title page-title-alt">Personnages</h1>
                    <CharacterAddModal />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 character-row">

                    {donneesRecues.map(donneesRecues => {
                        const { id, name, image, status, origin } = donneesRecues;
                        return (
                            <div key={id} className="col character-col">
                                <Card>
                                    <div className="card-inner">
                                        <div className="card-background">
                                            <div className="card-image-wrapper">
                                                <div className="image-ratio-1">
                                                    <div className="img-wrapper" style={{ backgroundImage: `url(${image})` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <CardTitle>
                                                <h3 className="mb-0">{name}</h3>
                                            </CardTitle>
                                            <CardSubtitle>
                                                <span className="character-page-field-title">Statut:</span> {status} <br />
                                                <span className="character-page-field-title">Origine:</span> {origin}
                                            </CardSubtitle>
                                            <div className="button-container">
                                                <Link to={'/character/' + id} className="btn btn-cta-primary">
                                                    <span className="btn-icon-wrap"><FiEye /></span>
                                                    Voir plus
                                                </Link>
                                                <Button color="cta-secondary">
                                                    <span className="btn-icon-wrap"><FiTrash2 /></span>
                                                    Supprimer
                                                </Button>
                                            </div>
                                        </CardBody>

                                    </div>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        </BaseScreen >
    );
}

export default withRouter(CharacterScreen);
const Wrapper = styled.div`
.character-row {
    align-content: stretch;
}

.character-col {
    margin-bottom: 30px;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: 100%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.2);
    transform: scale(1);
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.2);
    }
}

.card-inner {

}
.card-background {
    position: relative;
    width: 100%;
    height: 75px;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background: #EFEFF9;
        opacity: 1;
        width: 100%;
        height: 100%;
    }
}

.card-image-wrapper {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100px;
    z-index: 3;

    .image-ratio-1 {
        border-radius: 100%;
        border: 5px solid #ffffff;
    }
}

.card-body {
    display: flex;
    flex-direction: column;
    padding: 70px 1.25rem 1.25rem;
}

.card-subtitle {
    margin-bottom: 20px;
    flex-grow: 1;
}

.button-container {
    .btn:first-of-type {
        margin-right: 10px;
    }
}

`