import React, { PureComponent } from 'react';
import styled from 'styled-components/macro';
import Navigation from '../components/Navigation'

import {Container, Row, Col} from "reactstrap";

class BaseScreen extends PureComponent {
    render() {
        return (
            <Wrapper>
                <div className="nav-wrapper">
                   <Navigation/>
                </div>
                <Container>
                    <div className='page-content'>
                        {this.props.children}
                    </div>
                </Container>
                <Footer />
            </Wrapper>
        )
    }
}

export default BaseScreen;

const Wrapper = styled.div`

`