import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import EmployeeCardSingle from "../components/EmployeeCardSingle";

class EmployeeCardList extends PureComponent {
  render() {
    return (
      <Wrapper className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5" id='employee-list'>
        <EmployeeCardSingle
          color='#eeeeee'
          name="Shany Carl"
          title="Enseignant en Informatique"
          email="shany@random.com"
          telephone="418-666-6666"
          address="1234, rue Thiers"
        />
        <EmployeeCardSingle
          color='#cccccc'
          name="Francisca Vargas"
          title="Developpeur Front-End"
          email="francisca@random.com"
          telephone="+514-555-5555"
          address="1234, rue St-Denis"
        />
        <EmployeeCardSingle
          color='#9a9a9a'
          name="Julien Laplanche"
          title="Developpeur Back-End"
          email="julien@random.com"
          telephone="+514-444-4444"
          address="1234, rue St-Catherine"
        />
        <EmployeeCardSingle
          color='#9a9a9a'
          name="Jane Doe"
          title="Developpeur Front-End"
          email="jane@random.com"
          telephone="+514-333-3333"
          address="1234, rue Papineau"
        />
        <EmployeeCardSingle
          color='#9a9a9a'
          name="Bob Doe"
          title="Developpeur Full-Stack"
          email="bob@random.com"
          telephone="+514-222-2222"
          address="1234, rue Laurier"
        />
        <EmployeeCardSingle
          color='#9a9a9a'
          name="Jody Doe"
          title="Chargé de projet"
          email="jody@random.com"
          telephone="+514-111-1111"
          address="1234, rue Chabot"
        />
      </Wrapper>
    );
  }
}

export default EmployeeCardList;

const Wrapper = styled.div`
  align-items: stretch;


  #display-data{
    margin-top:12px;
    background: #e5e5e5;
    padding:1px;
`
