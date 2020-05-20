import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { Card, ListGroup } from "react-bootstrap";

class EmployeeCardSingle extends PureComponent {
  render() {
    const { name, title, email, telephone, address } = this.props;

    return (
      <Wrapper className="col employee-single-card-col">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <ListGroup variant="flush">
            <ListGroup.Item>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
            </ListGroup.Item>
              <ListGroup.Item>
                  <a href="mailto:{email}">{email}</a>
                  </ListGroup.Item>
              <ListGroup.Item> <a href="mailto:{telephone}">{telephone}</a></ListGroup.Item>
              <ListGroup.Item><span>{address}</span></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Wrapper>
    );
  }
}

export default EmployeeCardSingle;

const Wrapper = styled.div``;
