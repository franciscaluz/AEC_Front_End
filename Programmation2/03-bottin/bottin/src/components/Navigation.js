import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import store from 'store';
import isLoggedIn from './is_logged_in';
import styled from "styled-components/macro";
import logo from "../assets/logo-random.svg";
import logout from "../assets/icn-logout.svg";
import { Nav, Navbar } from "react-bootstrap";
import AddEmployeeModal from "./addEmployeeModal";


const handleLogout = history => () => {
  store.remove('loggedIn');
  history.push('/');
}

const Navigation = ({ history }) => {
  if (!isLoggedIn()) {
    return <Redirect to='/' />
  }
  return (
    <Wrapper>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>
        <Nav>
          <AddEmployeeModal />
          <Nav.Link onClick={handleLogout(history)}>
            <img src={logout} alt="logout" className="img-fluid" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </Wrapper>
  );
}

export default withRouter(Navigation);
const Wrapper = styled.div`

.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  .navbar-brand {
      margin-bottom: 50px;
      margin-right: 0;
  }

  .navbar-nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      border-bottom: 0.5px solid rgba(255,255,255,0.5);
  }

  .nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 80px;
      transition: all .2s ease;

      &:hover {
          background: #19172e;
      }
  }
}
`
