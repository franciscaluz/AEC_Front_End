import React, { useState } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { IoMdCreate, IoMdCloseCircleOutline } from 'react-icons/io'

const CharacterEditModal = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}><IoMdCloseCircleOutline /></button>;

    return (
        <>
            <Button color="theme-purple-light" onClick={toggle}>
                <span className="btn-icon-wrap"><IoMdCreate /></span>
                Modifier
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <Form>
                    <ModalHeader toggle={toggle} close={closeBtn}>Modifier un personnage</ModalHeader>
                    <ModalBody>
                        <Row form>
                            <Col md={12}>
                                <Row form>
                                    <Col md="6">
                                        someimagehere
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label for="image">Image</Label>
                                            <CustomInput type="file" id="image" name="customFile" label="Modifier la photo" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="name">Nom complet</Label>
                                    <Input type="text" name="name" id="name" placeholder="Prénom & nom" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="gender">Genre</Label>
                                    <Input type="text" name="gender" id="gender" placeholder="Genre" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="status">Statut</Label>
                                    <Input type="text" name="status" id="status" placeholder="Statut" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="species">Espèce</Label>
                                    <Input type="text" name="species" id="species" placeholder="Espèce" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="type">Type d'espèce</Label>
                                    <Input type="text" name="type" id="type" placeholder="Type" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="origin">Planète d'origine</Label>
                                    <Input type="text" name="origin" id="origin" placeholder="Nom de la planète d'origine" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="location">Emplacement Actuel</Label>
                                    <Input type="text" name="location" id="Location" placeholder="Emplacement" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Annuler</Button>
                        <Button color="theme-primary" type="submit" onClick={toggle}>Modifier</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}

export default CharacterEditModal;