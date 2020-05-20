import React, { PureComponent } from 'react';
import logo from '../assets/logo.svg';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, InputGroup, Button } from 'react-bootstrap';

class Navigation extends PureComponent {

    render() {
        return (
            <Container>
                <Navbar expand="lg" className="d-flex align-items-center">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                           Flix
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#link">Connexion</Nav.Link>
                            <Nav.Link href="#link">S'enregistrer</Nav.Link>
                            <NavDropdown title="Catégories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Suspens</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Drame</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Comedie</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Documentaire</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <InputGroup className="mb-0">
                                <FormControl type="text" placeholder="Search" className="" />
                                <InputGroup.Append>
                                    <Button variant="primary">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

        )
    }
}


export default Navigation;
