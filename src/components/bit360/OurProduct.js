import React, { Component } from "react";
import { Container, Button, Row, Col } from "shards-react";
import ProductItem from "./ProductItem";

export class OurProduct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
             proDuctOne: "",
             proDuctTwo: "",
             proDuctThree: ""
        }
    }
    
  render() {
    return (
      <div>
        <Container className="my-mt-plus">
          <Row>
            <Col lg="12" xl="12" md="6" sm="12">
              <div className="justify-centent-center text-center">
                <div className="text-center">
                  <h2>{this.props.ourProduct}</h2>
                  <div className="dotted-flex">
                    <div
                      style={{ background: "#00000091", width: "20px" }}
                    ></div>
                    <div></div>
                  </div>
                  <p>{this.props.longLorem}</p>

                  <div className="btn-group">
                    <Button theme="primary" >Manual</Button>
                    <Button className="" theme="info">
                      Yearly
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Row>
            <ProductItem />
            <ProductItem />
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurProduct;
