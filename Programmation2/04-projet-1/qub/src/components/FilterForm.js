import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { Form, FormControl, FormGroup, Button, } from "react-bootstrap";
import Search from "../assets/icn-search.svg";

class FilterForm extends PureComponent {

    render() {
        const { setFilterStr } = this.props

        return (
            <Wrapper>
                <Form inline>
                    <FormGroup className="mb-0 input-search">
                        <FormControl type="search" placeholder="Rechercher" onChange={e => setFilterStr(e.target.value)} />
                    </FormGroup>
                </Form>
            </Wrapper>
        );
    }
}

export default FilterForm;
const Wrapper = styled.div`

`