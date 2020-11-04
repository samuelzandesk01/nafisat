import React, { Component } from 'react'

export class MyButton extends Component {
    render() {
        return (
            <div>
                <button downApp="Download App" downSoft="Download Now" proDuct="Our Product">{this.props.downLoad}</button>
            </div>
        )
    }
}

export default MyButton
