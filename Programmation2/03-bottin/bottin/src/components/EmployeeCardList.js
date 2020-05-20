import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import EmployeeCardSingle from "../components/EmployeeCardSingle";

//import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class EmployeeCardList extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5">
          <EmployeeCardSingle
            color= '#eeeeee'
            name="Shany Carl"
            title="Enseignant en Informatique"
            email="shany@random.com"
            telephone="418-666-6666"
            address="1234, rue Thiers"
          />
          <EmployeeCardSingle
            color = '#cccccc'
            name="Francisca Vargas"
            title="Developpeur Front-End"
            email="francisca@random.com"
            telephone="+514-555-5555"
            address="1234, rue St-Denis"
          />
          <EmployeeCardSingle
            color = '#9a9a9a'
            name="Julien Laplanche"
            title="Developpeur Front-End"
            email="julien@random.com"
            telephone="+514-444-4444"
            address="1234, rue St-Catherine"
          />
        </div>
      </Wrapper>
    );
  }
}

export default EmployeeCardList;

const Wrapper = styled.div``;
