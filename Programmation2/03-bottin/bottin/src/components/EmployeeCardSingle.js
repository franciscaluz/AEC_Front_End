import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { Card, ListGroup } from "react-bootstrap";

class EmployeeCardSingle extends PureComponent {
  render() {
    const { name, title, email, telephone, address, color } = this.props;

    return (
      <Wrapper className="col employee-single-card-col">
        <Card className='employee-card-single'>
          <div className='employee-card-single-img'></div>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {title}
                </Card.Subtitle>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href={`mailto:${this.props.email}`}>{email}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href={`tel:+${this.props.telephone}`}>{telephone}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>{address}</span>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Wrapper>
    );
  }
}

export default EmployeeCardSingle;

const Wrapper = styled.div`
.employee-card-single-img {
    display: block;
    height: 150px;
    width: 100%;
    background-color: ${this.props.color};


`
