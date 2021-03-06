import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import EmployeeCardList, { employees } from "../components/EmployeeCardList";
import FilterForm from "../components/FilterForm";
import EmployeeCardSingle from "../components/EmployeeCardSingle";

class HomepageScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterStr: ''
    };
  }

  render() {
    /* const List = this.state.employees; */
    const filteredStaffList = employees.filter(employees =>
      employees.name.toLowerCase().includes(this.state.filterStr.toLowerCase())
    )
    return (
      <BaseScreen>
        <Wrapper className='directory'>
          <div className='directory-header'>
            <h1>Annuaire Employés</h1>
            <FilterForm setFilterStr={val => this.setState({ filterStr: val })} />
          </div>
          <EmployeeCardList>
            {filteredStaffList.map((item, index) => (
              <EmployeeCardSingle key={index}
                name={item.name}
                title={item.title}
                email={item.email}
                telephone={item.telephone}
                address={item.address}
              />
            ))}

          </EmployeeCardList>
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
