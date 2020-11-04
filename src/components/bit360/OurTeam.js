import React, { Component } from 'react';
import {Card, Container, Row, CardBody, Col} from 'shards-react';
import JohnDoe from '../../assets/img/teams/1.jpg'
import MissDoe from '../../assets/img/teams/3.jpg'
import John from '../../assets/img/teams/4.jpg';
import {Link} from 'react-router-dom'


class OurTeam extends Component {
    render() {
        return (
            <div className=" p-5 about-us my-mt-plus" >
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h2>Our Innovative Team</h2>
                                <div className="dotted-flex">
                                    <div style={{background: '#00000091', width: '20px'}}></div>
                                    <div></div>
                                </div>
                                <p>{this.props.longLorem}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 text-center">
                        <Col  xl="4" lg="4" md="6" sm="6"  className="mt-4">
                            <Card className="Card">
                                <img src={JohnDoe} alt="Team_Image" className="team-img" width="100%"/>   
                                <CardBody>
                                <p>{this.props.shortLorem}</p>
                                <div className="hr-line mb-4"></div>
                                <div className="text-center">
                                   <div style={{display: 'flex', width: '100%'}}>
                                        <div className="p-3">
                                            <Link>
                                                <img src={JohnDoe} alt="John_Doe" style={{borderRadius: '100px'}} width="30px" />
                                            </Link>
                                        </div>
                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-comment icon check"></i>
                                            </Link>
                                        </div>

                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-whatsapp icon check"></i>
                                            </Link>
                                        </div>
                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-twitter icon check"></i>
                                            </Link>
                                        </div>
                                   </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col  xl="4" lg="4" md="6" sm="6"  className="mt-4">
                            <Card className="Card">
                                <img src={MissDoe} alt="Team_Image" width="100%"/>   
                                <CardBody>
                                <p>{this.props.shortLorem}</p>
                                <div className="hr-line mb-4"></div>
                                <div className="text-center">
                                   <div style={{display: 'flex', width: '100%'}}>
                                        <div className="p-3">
                                            <Link>
                                                <img src={JohnDoe} alt="John_Doe" style={{borderRadius: '100px'}} width="30px" />
                                            </Link>
                                        </div>
                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-comment icon check"></i>
                                            </Link>
                                        </div>

                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-whatsapp icon check"></i>
                                            </Link>
                                        </div>
                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-twitter icon check"></i>
                                            </Link>
                                        </div>
                                   </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="4" md="6" sm="6"  className="mt-4">
                            <Card className="Card">
                                <img src={John} alt="Team_Image" width="100%"/>   
                                <CardBody>
                                <p>{this.props.shortLorem}</p>
                                <div className="hr-line mb-4"></div>
                                <div className="text-center">
                                   <div style={{display: 'flex', width: '100%'}}>
                                        <div className="p-3">
                                            <Link>
                                                <img src={JohnDoe} alt="John_Doe" style={{borderRadius: '100px'}} width="30px" />
                                            </Link>
                                        </div>
                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-comment icon check"></i>
                                            </Link>
                                        </div>

                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-whatsapp icon check"></i>
                                            </Link>
                                        </div>
                                        <div className="p-3">
                                            <Link>
                                                <i className="fa fa-twitter icon check"></i>
                                            </Link>
                                        </div>
                                   </div>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default OurTeam
