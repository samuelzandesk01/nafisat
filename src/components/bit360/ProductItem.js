import React, { Component } from "react";
import { Col, Row } from "shards-react";

export class ProductItem extends Component {
  render() {
    return (
      <Row>
        <Col xl="4" lg="4" md="6" sm="12" xs="12">
          <div className="simple-card">
            <div className="text-center p-3">
              <h4>Free</h4>
              <h3>
                <sup>$</sup>00.0
              </h3>
              <span className="badges">1 User</span>
              <p>{this.props.shortLorem}</p>
              <div className="">
                <ul>
                  <li>
                    <i className="fa fa-check check"></i>Protecting User
                  </li>
                  <li>
                    <i className="fa fa-check check"></i>Protecting User
                  </li>
                  <li>
                    <i className="fa fa-check check"></i>Protecting User
                  </li>
                  <li>
                    <i className="fa fa-check check"></i>Protecting User
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
       
      </Row>
    );
  }
}

export default ProductItem;
