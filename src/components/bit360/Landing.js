import React from "react";
import { Container } from "shards-react";
import HOC from './HOC'

export class Landing extends React.Component {
  render() {
    const {longLorem} = this.props;

    // const Landingpage = {
    //   width: "100%",
    //   height: "13vh",
    //   boxShadow: '#e9e9e9 1px 6px 7px 0px',
    //   backgroundColor: "#5C80E5",
    //   position: 'fixed',
    //   overflow: 'hidden',
    //   zindex: '100',

    // };
    return (
      <div >
        <Container fluid>
            <p>{longLorem}</p>
        </Container>
      </div>
    );
  }
}

export default HOC(Landing);
