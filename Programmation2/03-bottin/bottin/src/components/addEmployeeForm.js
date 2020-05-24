import React, { PureComponent } from 'react';
import styled from "styled-components/macro";
import { Form, Button, Row, Col } from "react-bootstrap";

class AddEmployeeForm extends PureComponent {


    render() {
        return (
            <Wrapper>
                <Form>
                    <fieldset>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="newName">
                                    <Form.Label>
                                        Prénom & Nom
                                        <span className='input-required'> *</span>
                                    </Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Prénom Nom"
                                        name='name'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="newEmail">
                                    <Form.Label>
                                        Email
                                        <span className='input-required'> *</span>
                                    </Form.Label>
                                    <Form.Control type="email"
                                        placeholder="email@user.com"
                                        name='email'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="newOccupation">
                                    <Form.Label>
                                        Poste Occupé
                                <span className='input-required'> *</span>
                                    </Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Poste"
                                        name='occupation'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="newPhone">
                                    <Form.Label>
                                        Numéro de téléphone
                                        <span className='input-required'> *</span>
                                    </Form.Label>
                                    <Form.Control type="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        placeholder="514-555-5555"
                                        name='phone'
                                        required />
                                </Form.Group>
                            </Col>
                            <Col xs={12} >
                                <Form.Group controlId="newAddress">
                                    <Form.Label>
                                        Adresse
                                        <span className='input-required'> *</span>
                                    </Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Adresse"
                                        name='address'
                                        required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Control.Feedback>
                            Ce champ est invalide.
                        </Form.Control.Feedback>
                    </fieldset>
                    <div className='form-btn-container'>
                        <Button variant="primary" type="submit">
                            Ajouter
                        </Button>
                    </div>
                </Form>
            </Wrapper>

        )
    }
}

export default AddEmployeeForm;
const Wrapper = styled.div`
.form-btn-container {
    text-align: right;
}

`