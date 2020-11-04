import React from "react";

class Nafisat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      funds: 'Nafisat'
    };
  }


  render() {
    return (
      <div>
        <button 
            onClick={this.addNumbers}>Click to change name</button>
            <p>{this.state.funds}</p>
      </div>
    );
  }
}

export default Nafisat;
