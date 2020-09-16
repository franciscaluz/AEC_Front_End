import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import BaseScreen from './BaseScreen'
import { Button, Col } from 'reactstrap';
import { IoIosTrash, } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';
import CharacterEditModal from '../components/modals/CharacterEditModal';


const defaultEndpoint = 'https://rickandmortyapi.com/api/character/';

const UserTableScreen = ({ props }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            const res = await fetch(defaultEndpoint);
            const data = await res.json();
            setData(data);
        }
        getData();
    }, []);

    const { results = [] } = data;

    console.log("data", data);

    return (
        <BaseScreen>
            <Wrapper>
                <div className="page-header">
                    <div className="page-header-title">
                        <h1 className="page-title page-title-alt">Modifier la liste des personnages</h1>

                    </div>
                    <Button color="cta-primary">
                        <span className="btn-icon-wrap"><FiPlus /></span>
                        Ajouter
                    </Button>
                </div>
                <div className="row row-cols-2">

                    {results.map(result => {
                        const { id, name, image, gender, species, type, origin, status, location } = result;

                        return (
                            <Col key={id} className="user-grid-col">
                                <div className="user-grid-list">
                                    <div className="user-grid-list-inner">
                                        <div className="user-grid-number">
                                            <h6>{id}</h6>
                                        </div>
                                        <div className="user-grid-image">
                                            <img src={image} alt="character" className="img-fluid" />
                                        </div>
                                        <div className="user-grid-info">
                                            <div className="user-grid-title">
                                                <h4 className="mb-0">{name}</h4>
                                            </div>
                                            <div className="user-grid-details">
                                                <span>Genre:</span> {gender}<br />
                                                <span>Statut:</span> {status}<br />
                                                <span>Espèce:</span> {species}<br />
                                                <span>Type: </span> {type}<br />
                                                <span>Origine:</span>{origin.name}<br />
                                                <span>Emplacement:</span>{location.name}
                                            </div>
                                            <div className="user-grid-buttons">
                                                <CharacterEditModal />
                                                <Button color="cta-primary">
                                                    <span className="btn-icon-wrap"><IoIosTrash /></span>
                                                    Supprimer
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        )
                    })}

                </div>

            </Wrapper>
        </BaseScreen >
    );
}

export default UserTableScreen;
const Wrapper = styled.div`

.user-grid-col {
    margin-bottom: 30px;
}

.user-grid-list {
    position: relative;
    padding: 1.25rem;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.2);
}

.user-grid-list-inner{
    display: flex;
    /* align-items: center; */
}

.user-grid-title {
    margin-bottom: 15px;
}

.user-grid-number {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    height: calc(100% - 2.5rem);
    z-index: 0;
    display: flex;
    align-items: center;

    :after {
        position: absolute;
        top: 0;
        right: 50%;
        width: 1px;
        height: 100%;
        content: '';
        background: #E1E0F2;
        z-index: 1;
    }

    h6 {
        position:relative
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        padding: 5px;
        color: #312651;
        font-weight: 500;
        min-width: 20px;
        min-height: 30px;
        border-radius: 5px;
        margin-bottom: 0;
        z-index: 2;
        transform: rotate(90deg);

    }
}

.user-grid-image {
    margin-right: 15px;
    img {
        max-width: 100px;
        border-radius: 100%;
    }
}

.user-grid-info {
    width: 100%;

}

.user-grid-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.user-grid-details {
    margin-bottom: 30px;

    span {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 5px;
    }
}

.user-grid-buttons {
    border-radius: 10px;
    .btn:first-of-type {
        margin-right : 10px;
    }
}


`