import React from "react";
import styled from "styled-components/macro";
import { Button, Modal } from "react-bootstrap";
import AddEmployeeForm from "./addEmployeeForm";
import add from "../assets/icn-plus.svg";

function EmployeeModal(props) {

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalWrapper>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Ajouter un nouveau contact à l'annuaire
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddEmployeeForm />
                    </Modal.Body>
                </ModalWrapper>
            </Modal>
        </div>
    );
}

function AddEmployeeModal() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Wrapper>
            <Button variant='icon' className="nav-link" onClick={() => setModalShow(true)}>
                <img src={add} alt="add" className="img-fluid" />
            </Button>

            <EmployeeModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Wrapper>
    );
}

export default AddEmployeeModal;

const Wrapper = styled.div`
`
const ModalWrapper = styled.div`
.modal-header {
    position: relative;
    align-items: center;
    justify-content: center;
    background: #272447;
    color: #ffffff;
    .h4 {
        margin-bottom: 0;
    }
    .close {
        position: absolute;
        right: 0;
        margin: 0;
        color: #ffffff;
        text-shadow: none;
        opacity: 1;
    }
}
.modal-body {
    padding: 50px;
}

`

