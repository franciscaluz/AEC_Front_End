import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import EmployeeCardSingle from "../components/EmployeeCardSingle";

class EmployeeCardList extends PureComponent {

  render() {
    const Employees = [
      {
        name: "Shany Carl",
        title: "Enseignant en Informatique",
        email: "shany@random.com",
        telephone: "418-666-6666",
        address: "1234, rue Thiers"
      },

      {
        name: "Francisca Vargas",
        title: "Developpeur Front-End",
        email: "francisca@random.com",
        telephone: "+514-555-5555",
        address: "1234, rue St-Denis"
      },

      {
        name: "Julien Laplanche",
        title: "Developpeur Back-End",
        email: "julien@random.com",
        telephone: "+514-444-4444",
        address: "1234, rue St-Catherine"
      },

      {
        name: "Jane Doe",
        title: "Developpeur Front-End",
        email: "jane@random.com",
        telephone: "+514-333-3333",
        address: "1234, rue Papineau"
      },
      {
        name: "Bob Doe",
        title: "Developpeur Full-Stack",
        email: "bob@random.com",
        telephone: "+514-222-2222",
        address: "1234, rue Laurier"
      },
      {
        name: "Jody Doe",
        title: "Chargé de projet",
        email: "jody@random.com",
        telephone: "+514-111-1111",
        address: "1234, rue Chabot"
      }
    ];

    const EmployeeList = Employees.map((item, index) => {
      return (
        <EmployeeCardSingle key={index}
          name={item.name}
          title={item.title}
          email={item.email}
          telephone={item.telephone}
          address={item.address}
        />
      )

    })
    console.log(EmployeeList);

    return (
      <Wrapper className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5" id='employee-list'>
        {EmployeeList}
      </Wrapper>
    )
  }
}

export default EmployeeCardList;

const Wrapper = styled.div`
  align-items: stretch;
`
