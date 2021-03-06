import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { Form, FormControl, InputGroup, Button, } from "react-bootstrap";
import Search from "../assets/icn-search.svg";

class FilterForm extends PureComponent {

    render() {
        const { setFilterStr } = this.props

        return (
            <Wrapper>
                <Form inline>
                    <InputGroup className="mb-0 input-search">
                        <FormControl type="search" placeholder="Rechercher" onChange={e => setFilterStr(e.target.value)} />
                        <InputGroup.Append>
                            <Button variant="primary" type='submit'>
                                <img src={Search} alt="search" className="img-fluid" />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Wrapper>
        );
    }
}

export default FilterForm;
const Wrapper = styled.div`

`