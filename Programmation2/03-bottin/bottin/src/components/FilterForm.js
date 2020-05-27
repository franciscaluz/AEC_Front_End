import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { Form, FormControl, InputGroup, Button, } from "react-bootstrap";
import Search from "../assets/icn-search.svg";

class FilterForm extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        return (
            <Wrapper>
                <Form inline>
                    <InputGroup className="mb-0 input-search">
                        <FormControl type="text" placeholder="Rechercher" />
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