import React, { useState } from 'react';
import styled from 'styled-components/macro'
import { Container, Row, Col } from 'reactstrap';
import BaseScreen from './BaseScreen';
import ApiList from '../components/ApiList'

const HomepageScreen = () => {
    return (
        <BaseScreen>
            <h2>This is my homepage</h2>
            <ApiList />
        </BaseScreen>
    );
}

export default HomepageScreen;
const Wrapper = styled.div``