import React, { Component } from "react";
import { Form, FormInput, Container, Button,  FormGroup, Row, Col } from "shards-react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <Container fluid>
        <Row>
          <Col lg="6" md="6" xl="6" sm="12">
            <h1>Contact Us</h1>
            <Form>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                  <Button theme="info" type="submit">Submit</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
