import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import EmployeeCardList from "../components/EmployeeCardList";
import { Form, FormControl, InputGroup, Button, } from "react-bootstrap";
import Search from "../assets/icn-search.svg";
import AddEmployeeModal from "../components/addEmployeeModal";

class HomepageScreen extends PureComponent {
  render() {
    return (
      <BaseScreen>
        <Wrapper className='directory'>
          <div className='directory-header'>
            <h1>Annuaire Employés</h1>
            <Form inline>
              <InputGroup className="mb-0 input-search">
                <FormControl type="text" placeholder="Rechercher" className="" />
                <InputGroup.Append>
                  <Button variant="primary" type='submit'>
                    <img src={Search} alt="search" className="img-fluid" />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </div>
          <EmployeeCardList />
          <AddEmployeeModal />
        </Wrapper>
      </BaseScreen>
    );
  }
}

export default HomepageScreen;
const Wrapper = styled.div`
margin: 0 auto;
padding-right: 15px;
padding-left: 15px;

.directory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  //padding-bottom: 30px;
  //border-bottom: 1px solid #CC262D;

  h1 {
    margin-bottom: 0;
  }
}

`
