import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { employees } from '../constant';
import { Container, Row, Col, Button } from "react-bootstrap";

class AlbumSingleScreen extends PureComponent {

    render() {

        return (
            <BaseScreen>
                <Wrapper>
                    <Container fluid>
                        <div className='page-header'>
                            <Row>
                                <Col md={5} lg={4} xl={3}>
                                    <div className="card-img">
                                        <div className="img-wrapper"></div>
                                    </div>
                                    <p className="text-uppercase mb-0"><strong>Album</strong></p>
                                    <h1 className="mb-0">Bitches Brew</h1>
                                    <h4 className="mb-0">Miles Davis</h4>
                                    <ul className="list-unstyled d-flex flex-row h6">
                                        <li className="">1970</li>
                                        <li className="">6 Chansons</li>
                                        <li className="">94:11</li>
                                    </ul>
                                    <Button variant="outline-primary">
                                        Retour à la page principale
                                    </Button>

                                </Col>
                                <Col md={7} lg={8} xl={9}>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Titre</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>




                                </Col>
                            </Row>

                        </div>
                    </Container>
                </Wrapper>
            </BaseScreen>
        );
    }
}

export default AlbumSingleScreen;
const Wrapper = styled.div`
margin: 0 auto;

.directory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 0;
  }
}

`
