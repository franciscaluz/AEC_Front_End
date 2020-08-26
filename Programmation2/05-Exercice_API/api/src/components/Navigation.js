import React, { useState } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import styled from "styled-components/macro";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Container>
        <Navbar light expand="md" className="main-nav">
          <NavbarBrand href="/"><h3 className='mb-0'>API</h3></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                </DropdownItem>
                  <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </Container>
    </Wrapper>
  );
}

export default Navigation;
const Wrapper = styled.div`

.main-nav {
  display: flex;
  align-items: center;
  width: 100%;
}

`
