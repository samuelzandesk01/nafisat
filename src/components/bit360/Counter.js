import React, { Component } from 'react';
import {Row, Col} from 'shards-react';

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             seconds: 0,
             minute: 0,
             hours: 0,
        }
    }

    sec(){
        this.setState({
            seconds: this.state.seconds + 1,
        })
    }

    min(){
        this.setState({
            minute: this.state.minute + 1
        })
    }

    hou(){
        this.setState({
            hours: this.state.hours + 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(() => this.sec(), 1000);
        this.interval = setInterval(() => this.min(), 10000);
        this.interval = setInterval(() => this.hou(), 100000)
    }

    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }
    
    render() {
        return (
            <div>
               <Row className="mt-4">
                   <Col>
                    <div>
                        <h3>{this.state.seconds}</h3>
                        <p>Seconds</p>
                    </div>
                   </Col>
                   <Col>
                        <div>
                            <h3>{this.state.minute}</h3>
                            <p>Minutes</p>
                        </div>
                   </Col>
                   <Col>
                        <div>
                            <h3>{this.state.hours}</h3>
                            <p>Hours</p>
                        </div>
                   </Col>
               </Row>
            </div>
        )
    }
}

export default Counter
