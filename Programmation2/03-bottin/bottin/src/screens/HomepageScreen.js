import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import EmployeeCardList from "../components/EmployeeCardList";
import FilterForm from "../components/FilterForm";

class HomepageScreen extends PureComponent {
  render() {
    return (
      <BaseScreen>
        <Wrapper className='directory'>
          <div className='directory-header'>
            <h1>Annuaire Employés</h1>
            <FilterForm onChange={this.handleChange} />
          </div>
          <EmployeeCardList />
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
