import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

export class NewsLetter extends Component {
  render() {
    return (
      <div className="newsletter">
        <Container>
          <Row>
            <Col sm="12" lg="12" md="12" xl="12">
              <div className="text-center">
                <h1>Our Newsletter</h1>
                <p>Stay tune to our page by submitting to our <span>newsletter</span></p>
                <form>
                  <input type="email" placaholder="Enter Email Address" />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewsLetter;
