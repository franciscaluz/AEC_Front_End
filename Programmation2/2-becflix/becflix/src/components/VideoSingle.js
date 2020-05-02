import React, { PureComponent } from 'react';
import { Container, Col, Jumbotron, Button, Row } from 'react-bootstrap'

class VideoSingle extends PureComponent {

    render() {
        return (
            <Container>

                <Jumbotron>
                    <h1>Titre de Film</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>

                <Row>
                    <Col sm={6}>
                        <h1>Titre de Film</h1>
                        <p>
                            Resumé
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>

            </Container>
        )
    }
}


export default VideoSingle;
