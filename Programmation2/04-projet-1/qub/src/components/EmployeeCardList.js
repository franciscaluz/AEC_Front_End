import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { employees } from "../constant"
import EmployeeCardSingle from "./albumCardSingle";



class EmployeeCardList extends PureComponent {
  render() {

    const employeeList = employees.map((item, index) => {
      return (
        <EmployeeCardSingle key={index}
          name={item.name}
          title={item.title}
          background={item.background}
        />
      )

    })

    return (
      <Wrapper className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" id='employee-list'>
        {employeeList}
      </Wrapper>
    )
  }
}

export default EmployeeCardList;

const Wrapper = styled.div`
  align-items: stretch;
`
