import React, { Component } from 'react';
import { Col, Container, Button,  Row } from "shards-react";
import SideImage from '../../assets/img/svg-img/protection.svg'
import Counter from './Counter';


class InnerContent extends Component {
    render() {
        return (
            <main>
            <div className="about-us">
            <Container fluid >
                  <Row>
                    <Col lg="6" xl="6" md="6" sm="12" className="mt-4">
                        <div className="about-section">
                            <div className="about-us-image">
                                <img src={SideImage} alt="SideImage" width="100%" />
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" xl="6" md="6" sm="12" className="mt-4">
                        <div className="text-left p-5">
                        <div className="about-us-text">
                            <h2>Why Sencurity?</h2>
                            <p>{this.props.longLorem}</p>
                            <div className="hr-line mb-4"></div>
                            <Row>
                                <Col lg="6" className="p-1">
                                    <li><i className="fa fa-check check"></i>Protecting User</li>
                                </Col>
                                <Col lg="6" className="p-1">
                                    <li><i className="fa fa-check check"></i>Trust Worthy</li>
                                </Col>
                                <Col lg="6" className="p-1">
                                    <li><i className="fa fa-check check"></i>Hyper Sensitive </li>
                                </Col>
                                <Col lg="6" className="p-1">
                                    <li><i className="fa fa-check check"></i>Most Used</li>
                                </Col>
                            </Row>
                            <Button className="mt-2" outline theme="info">View Documentation <i className="fa fa-download"></i></Button>
                            <div>
                                <Counter />
                            </div>
                        </div>
                        </div>
                    </Col>
                    </Row>
            </Container>
            </div>

            </main>
        )
    }
}

export default InnerContent;
