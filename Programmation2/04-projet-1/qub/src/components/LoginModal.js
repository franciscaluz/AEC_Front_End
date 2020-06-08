import React, { PureComponent } from 'react';
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components/macro";

class LoginModal extends PureComponent {
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    render() {
        return (
            <Wrapper>
                <a href='#' className='white-link' onClick={this.openModal}>Mot de passe oublié?</a>

                <Modal show={this.state.isOpen} onHide={this.closeModal} centered>
                    <ModalWrapper>
                        <Modal.Header closeButton>
                            <Modal.Title className='mb-0'>Mot de passe oublié?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Utilisez les paramètres suivants</h6>
                            <p>Utilisateur  : <strong>user@a.com</strong></p>
                            <p>Mot de passe  : a</p>
                        </Modal.Body>
                    </ModalWrapper>
                </Modal>
            </Wrapper>
        );
    }
}

export default LoginModal;

const Wrapper = styled.div``
const ModalWrapper = styled.div`
.modal-header {
    border-bottom 1px solid #FF21B2: 
}

`