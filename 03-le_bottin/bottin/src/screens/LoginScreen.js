import React, { PureComponent } from 'react';
import styled from 'styled-components/macro';

import {Container, Row, Col} from "reactstrap";

class LoginScreen extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Container>
                <div className="auth-form-wrapper">
                </div>
                </Container>
            </Wrapper>
        )
    }
}

export default LoginScreen;

const Wrapper = styled.div`

`