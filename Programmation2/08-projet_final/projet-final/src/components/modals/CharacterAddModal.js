import React, { useState } from "react";
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FiPlus, FiXCircle } from 'react-icons/fi'
//import { API } from "../../constantes";
import { toast } from "react-toastify"

const CharacterAddModal = (props) => {
    const { className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}><FiXCircle /></button>;

    //const [photos, setPhotos] = useState("");

    async function addPokemon(nom, statut, genre, espece, type, origine, emplacement, photo, id) {
        try {
            let url = 'http://localhost:3001/characters/'
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: id,
                    name: nom,
                    status: statut,
                    gender: genre,
                    species: espece,
                    type: type,
                    origin: origine,
                    location: emplacement,
                    image: photo,
                })
            });
            if (response.ok) {
                props.history.push("/");
                toast.success("Ajout du personnage " + nom);

                return response;
            }
            throw new Error('Request failed!');
        }
        catch (error) {
            console.log(error);
        }
    }

    function handleAdd(event) {
        event.preventDefault();

        const nom = document.getElementById('nom_personnage').value;
        const statut = document.getElementById('statut_personnage').value;
        const genre = document.getElementById('genre_personnage').value;
        const espece = document.getElementById('espece_personnage').value;
        const type = document.getElementById('type_personnage').value;
        const origine = document.getElementById('origine_personnage').value;
        const emplacement = document.getElementById('emplacement_personnage').value;
        const photo = document.getElementById('photo_personnage').value;

        addPokemon(nom, statut, genre, espece, type, origine, emplacement, photo);
    }

    /*     function handlePhoto(event) {
            const photos = document.getElementById('photo_personnage').value;
            setPhotos(photos);
        } */

    return (
        <>
            <Button color="cta-primary" onClick={toggle}>
                <span className="btn-icon-wrap"><FiPlus /></span>
                Ajouter
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <Form>
                    <ModalHeader toggle={toggle} close={closeBtn}>Ajouter un personnage</ModalHeader>
                    <ModalBody>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="photo_personnage">Photo</Label>
                                    <Input type="url" id="photo_personnage" name="photo_personnage" placeholder="Entrez une URL valide" />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="nom_personnage">Nom complet</Label>
                                    <Input type="text" name="nom_personnage" id="nom_personnage" placeholder="Entrez le prénom et le nom" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="genre_personnage">Genre</Label>
                                    <Input type="text" name="genre_personnage" id="genre_personnage" placeholder="Entrez le genre" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="statut_personnage">Statut</Label>
                                    <Input type="text" name="statut_personnage" id="statut_personnage" placeholder="Entrez le statut" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="espece_personnage">Espèce</Label>
                                    <Input type="text" name="espece_personnage" id="espece_personnage" placeholder="Entrez l'espèce" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="type_personnage">Type d'espèce</Label>
                                    <Input type="text" name="type_personnage" id="type_personnage" placeholder="Entrez le type d'espèce" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="origine_personnage">Planète d'origine</Label>
                                    <Input type="text" name="origine_personnage" id="origine_personnage" placeholder="Nom de la planète d'origine" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="emplacement_personnage">Emplacement Actuel</Label>
                                    <Input type="text" name="emplacement_personnage" id="emplacement_personnage" placeholder="Entrez l'emplacement actuel" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="theme-secondary" onClick={toggle}>Annuler</Button>
                        <Button color="theme-primary" type="submit" onClick={handleAdd}>Ajouter</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}

export default CharacterAddModal;