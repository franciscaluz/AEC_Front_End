import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class BaseScreen extends PureComponent {
    render() {
        return (
            <div>
                <div className="sticky-nav">
                    <Navigation />
                </div>
                <Container>
                    <div className='page-content'>
                        {this.props.children}
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default BaseScreen;