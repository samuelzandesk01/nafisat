import React from "react";
import Logo from "../../assets/img/orange.png";
import { Container, Row, Col } from "shards-react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    const Color = {
      color: "#fd5d14",
      textTransform: "uppercase"
    };
    return (
      <div>
        <div>
          <Container fluid className="footer-component">
            <Row>
              <Col sm="6" lg="4" md="6" className="my-mt-plus" xl="3">
                <div className=" p-3">
                  <div>
                    <img src={Logo} alt="Footer_Logo" width="270" />
                    <br/>
                  </div>
                  {/* <h4>About Sencurity</h4> */}
                  <p>{this.props.longLorem}</p>
                </div>
              </Col>
              <Col sm="6" lg="4" md="6" xl="3">
                <div>
                  <div className="my-mt-plus footer-link p-3">
                    <h3 style={Color}>Social Links</h3>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Services</Link>
                      </li>
                      <li>
                        <Link to="/">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                      <li>
                        <Link to="/">Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm="6" lg="4" md="6" xl="3">
                <div>
                  <div className="my-mt-plus footer-link p-3">
                    <h3 style={Color}>Support Link</h3>
                    <ul>
                      <li>
                        <Link to="/">Apple Store</Link>
                      </li>
                      <li>
                        <Link to="/">Avast Anti Virus</Link>
                      </li>
                      <li>
                        <Link to="/">AVG Anti Virus</Link>
                      </li>
                      <li>
                        <Link to="/">Opera Browser</Link>
                      </li>
                      <li>
                        <Link to="/">Google</Link>
                      </li>
                      <li>
                        <Link to="/">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm="6" lg="4" md="6" xl="3">
                <div className="my-mt-plus footer-link p-3">
                  <Row>
                    <Col>
                      <Link>
                        <i className="fa fa-whatsapp fa-2x footer-icon"></i>
                      </Link>
                    </Col>
                    <Col>
                      <Link>
                        <i className="fa fa-youtube fa-2x footer-icon"></i>
                      </Link>
                    </Col>
                    <Col>
                      <Link>
                        <i className="fa fa-comment fa-2x footer-icon"></i>
                      </Link>
                    </Col>
                    <Col>
                      <Link>
                        <i className="fa fa-linkedin fa-2x footer-icon"></i>
                      </Link>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h2 tyle={Color}>Our News Letter</h2>
                  <p>{this.props.shortLorem}</p>
                  <form>
                    <input type="email" placeholder="enter your mail address" />
                    <button className="footer-btn">News Letter</button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
