import React from 'react';
import styled from 'styled-components/macro'
import Navigation from "../components/Navigation";

const BaseScreen = ({ children }) => {
    return (
        <Wrapper>
            <div className="nav-wrapper">
                <Navigation />
            </div>

            <div className='page-content'>
                {children}
            </div>
        </Wrapper>
    );
}

export default BaseScreen;

const Wrapper = styled.div`
width: 100%;

.nav-wrapper {
    height: 60px;
    background: #eeeeee;
    width: 100%;
  }

`