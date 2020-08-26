import React from 'react';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const BaseScreen = ({ children }) => {
    return (
        <div className="App">
            <Navigation />
            <div className="page-wrapper">
                <Container>
                    {children}
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default BaseScreen;