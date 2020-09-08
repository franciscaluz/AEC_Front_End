import React from 'react';
import styled from 'styled-components/macro';
import BaseScreen from './BaseScreen';
import { Row, Col } from 'reactstrap';

const PageNotFound = () => {
    return (
        <BaseScreen>
            <Wrapper>
                <Row>
                    <Col md={6}>
                        <img src={require('../assets/images/pickle-rick.gif')} alt="pickle rick..." className="img-fluid" />
                    </Col>
                    <Col md={6}>
                        <h1 className="display-1 mb-0"><span className="underline--magical">404</span></h1>
                        <h2>Oh ben! On dirait que cette page n'existe pas...</h2>
                    </Col>
                </Row>
            </Wrapper>
        </BaseScreen>
    );
}

export default PageNotFound;
const Wrapper = styled.div`

.display-1 {
    font-size: 10rem;
}

`