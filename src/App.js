import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Col, Container, Row, Button } from "shards-react";
import Mypage from "./components/pages/Mypage";
import Navbar from "./components/bit360/Navbar";
import About from "./components/bit360/About";
import { Portfolio } from "./components/bit360/Portfolio";
import { WhatWeDo } from "./components/bit360/WhatWeDo";
import { Contact } from "./components/bit360/Contact";
import { Service } from "./components/bit360/Service";
import { Cards } from "./components/bit360/Cards";
import InnerContent from "./components/bit360/InnerContent";
import OurProduct from "./components/bit360/OurProduct";
import OurTeam from "./components/bit360/OurTeam";
import {NewsLetter} from "./components/bit360/NewsLetter";

import Footer from "./components/bit360/Footer";

class App extends React.Component {
  state = {
    longLorem:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem itaque ut molestias quisquam eius? Perferendis dignissimos facilis nostrum eius reiciendis ipsa pariatur neque fugit quo. Tempore laborum quidem molestiae sed",
    shortLorem:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem itaque ut molestias quisquam eius?",
    buttonIcon: "Hello",
    ourProduct: "Our Products",
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            exact
            path="/"
            render={(props) => (
                <Container fluid >
                  <Row>
                    <Col lg="12" md="12" sm="12" xl="12">
                      <div className="text-center mt-5 security-mt">
                        <div className="path-designs"></div>
                        <b>
                          <h1>WHAT IS SECURITY?</h1>
                        </b>
                        <p>`{this.state.longLorem}`</p>
                        <Button outline theme="primary" className="m-2">
                          Download App
                        </Button>
                        <Button theme="info" className="m-2">
                          Download On Desktop
                        </Button>
                      </div>
                    </Col>
                    <div className="path-flex">
                      <div className="bounce-img"></div>
                    </div>
                    <div className="img-anime"></div>
                  </Row>
                  <Cards longLorem={this.state.longLorem} />
                  <InnerContent
                    longLorem={this.state.longLorem}
                    shortLorem={this.state.shortLorem}
                    ourProduct={this.state.ourProduct}
                  />
                  <OurProduct
                    longLorem={this.state.longLorem}
                    shortLorem={this.state.shortLorem}
                    ourProduct={this.state.ourProduct}
                  />
                  <OurTeam
                    longLorem={this.state.longLorem}
                    shortLorem={this.state.shortLorem}
                  />
                  <NewsLetter />
                   <Footer
                    longLorem={this.state.longLorem}
                    shortLorem={this.state.shortLorem}
                  />
                </Container>
               
            )}
          />

          <Route exact path="/Mypage" component={Mypage} />
          <Route
            exact
            path="/About"
            component={About}
            longLorem={this.state.longLorem}
            shortLorem={this.state.shortLorem}
          />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/WhatWeDo" component={WhatWeDo} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Service" component={Service} />
        </div>
      </Router>
    );
  }
}

export default App;
