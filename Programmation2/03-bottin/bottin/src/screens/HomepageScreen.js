import React, { PureComponent } from "react";
import BaseScreen from "./BaseScreen";
import EmployeeCardList from "../components/EmployeeCardList";
import {Form, FormControl, InputGroup, Button,} from "react-bootstrap";

class HomepageScreen extends PureComponent {
  render() {
    return (
      <BaseScreen>
        <section className="directory mx-auto">
          <Form inline>
            <InputGroup className="mb-0">
              <FormControl type="text" placeholder="Search" className="" />
              <InputGroup.Append>
                <Button variant="primary" type='submit'>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <EmployeeCardList />
        </section>
      </BaseScreen>
    );
  }
}

export default HomepageScreen;
