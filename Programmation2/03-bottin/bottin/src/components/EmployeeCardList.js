import React, { PureComponent } from 'react';
import styled from 'styled-components/macro'
import EmployeeCardSingle from '../components/EmployeeCardSingle'

//import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class EmployeeCardList extends PureComponent {

    render() {  
        return (
            <Wrapper>
               <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-4 row-cols-xl-6">
                    <EmployeeCardSingle
                    name= "Francisca Vargas"
                    title="Developpeur Front-End"
                    email='francisca@random.com'
                    telephone='(514) 666-6666'
                    address= '1234, rue St-Denis, Montréal, Québec'
                    />
                    <EmployeeCardSingle/>
                    <EmployeeCardSingle/>
                    <EmployeeCardSingle/>
                    <EmployeeCardSingle/>
                    <EmployeeCardSingle/>
                    <EmployeeCardSingle/>
                    <EmployeeCardSingle/>
                </div>
            </Wrapper>
        )
    }
}


export default EmployeeCardList;

const Wrapper = styled.div`

`