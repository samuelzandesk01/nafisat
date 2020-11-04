import React, { Component } from "react";
import { Col, Container, Card, CardBody, Row } from "shards-react";

export class Cards extends Component {
  render() {
    return (
      <Container className="mt-5 my-mt">
        <Row>
          <Col lg="4" xl="4" md="6" sm="12" className="mt-4">
            <Card style={{ maxWidth: "500px" }} className="Card">
              <div className="svg-path">
               <i className="fa fa-lock fa-5x icon"></i>
              </div>
              <CardBody>
                <div className="text-center p-3">
                  <h3>Monitoriing System</h3>
                  <p>{this.props.longLorem}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" xl="4" md="6" sm="12" className="mt-4">
            <Card className="Card" style={{ maxWidth: "500px" }}>
              <div className="svg-path">
                <i className="fa fa-user-secret icon fa-5x"></i>
              </div>
              <CardBody>
                <div className="text-center p-3">
                  <h3>Monitoriing System</h3>
                  <p>{this.props.longLorem}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" xl="4" md="6" sm="12" className="mt-4">
            <Card className="Card" style={{ maxWidth: "500px" }}>
              <div className="svg-path">
                <i className="fa fa-laptop icon fa-5x"></i>
              </div>
              <CardBody>
                <div className="text-center p-3">
                  <h3>Monitoriing System</h3>
                  <p>{this.props.longLorem}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
