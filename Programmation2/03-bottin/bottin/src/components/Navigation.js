import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import logo from "../assets/logo-random.svg";
import logout from "../assets/icn-logout.svg";
import add from "../assets/icn-plus.svg";
import { Nav, Navbar } from "react-bootstrap";

class Navigation extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#link">
              <img src={add} alt="add" className="img-fluid" />
            </Nav.Link>
            <Nav.Link href="#link">
              <img src={logout} alt="logout" className="img-fluid" />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Wrapper>
    );
  }
}

export default Navigation;
const Wrapper = styled.div``;
