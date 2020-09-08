import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import BaseScreen from './BaseScreen'
import { withRouter, Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import imgBg from '../assets/images/galaxy.jpg'
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const CharacterScreen = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://rickandmortyapi.com/api/character/");
            const data = await res.json();
            setData(data);
        }
        getData();
    }, []);

    const { results = [] } = data;
    console.log("results", results);

    return (
        <BaseScreen>
            <Wrapper>
                <div className="page-header">
                    <h1 className="page-title page-title-alt">Personnages</h1>
                    <Link to="user-table" className="btn btn-theme-purple-light">
                        <span className="btn-icon-wrap"><FiEdit /></span>
                        Ajouter
                    </Link>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 character-row">

                    {results.map(result => {
                        const { id, name, image, status, origin } = result;
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
                                                <h5 className="mb-0">{name}</h5>
                                            </CardTitle>
                                            <CardSubtitle>
                                                <span className="character-page-field-title">Statut:</span> {status} <br />
                                                <span className="character-page-field-title">Origine:</span> {origin.name}
                                            </CardSubtitle>
                                            <div className="button-container">
                                                <Link to={'/character/' + id} className="btn btn-theme-primary"><FiEye /></Link>
                                                <Button color="theme-secondary"><FiTrash2 /></Button>
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
    display: flex;
    height: 100%;
}
.card-background {
    position: relative;
    width: 100%;
    max-width: 100px;
    height: 100%;
/*     background-image: url(${imgBg});
    background-repeat: no-repeat;
    background-size: cover; */

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background: #E1E0F2;
        opacity: 0.5;
        width: 100%;
        height: 100%;
    }
}

.card-image-wrapper {
    position: absolute;
    top: 20px;
    right: -50px;
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
    padding: 140px 1.25rem 1.25rem;
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