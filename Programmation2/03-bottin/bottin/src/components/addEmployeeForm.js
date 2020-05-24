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
                                        name='newName'
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
                                        name='newEmail'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="newFunction">
                                    <Form.Label>
                                        Poste Occupé
                                <span className='input-required'> *</span>
                                    </Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Poste"
                                        name='newFunction'
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
                                        name='newPhone'
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
                                        name='newAddress'
                                        required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Control.Feedback>
                            Votre adresse et mot de passe sont incorrects.
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