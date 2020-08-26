import React, { useState } from 'react';
import styled from 'styled-components/macro'
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <p className='text-center'>Exercice-7 @ copyright.2020</p>
            </Container>
        </Wrapper>
    );
}

export default Footer;
const Wrapper = styled.div``
