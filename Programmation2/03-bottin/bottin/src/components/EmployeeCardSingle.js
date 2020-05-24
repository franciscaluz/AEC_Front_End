import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { Card, ListGroup } from "react-bootstrap";
import IcnEmail from '../assets/icn-email.svg';
import IcnPhone from '../assets/icn-phone.svg';
import IcnAddress from '../assets/icn-home.svg';

class EmployeeCardSingle extends PureComponent {
  render() {
    const { name, title, email, telephone, address } = this.props;

    return (
      <Wrapper className="col">
        <Card className='employee-card-single'>
          <div className='employee-card-single-img'></div>
          <Card.Body>
            <div className='employee-info'>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>
                {title}
              </Card.Subtitle>
            </div>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <img src={IcnEmail} alt="search" className="img-fluid" />
                <a href={`mailto:${this.props.email}`}>{email}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <img src={IcnPhone} alt="search" className="img-fluid" />
                <a href={`tel:+${this.props.telephone}`}>{telephone}</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <img src={IcnAddress} alt="search" className="img-fluid" />
                {address}
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
  margin-bottom: 30px;

.employee-card-single {
  height: 100%;
  border-radius: 7.5px;
  border: none;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.15);
  overflow: hidden;
  .card-body {
      padding: 0;
  }
}

.employee-info {
  padding: .75rem 1.25rem;
  .h5 {
    margin-bottom: 10px;
  }

  .h6 {
    margin-bottom: 0;
  }

  .card-subtitle {
    color: #9a9a9a;
    text-transform: uppercase;
    font-size: 12px;
  }
}

.list-group-item {
  display: flex;
  align-items: center;
  border: none;
  border-top: 1px solid rgba(0,0,0,.125);

  &:first-child {
    border-top: 1px solid rgba(0,0,0,.125);
  }

  img {
    margin-right: 8px;
  }
}

.employee-card-single-img {
    display: block;
    height: 150px;
    width: 100%;
    background: #cccccc;
}

`
