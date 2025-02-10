import React, { Component } from 'react'
import './style.css'
export class classComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message:'Hello'
        }
    }
    changeMessage = () => {
        this.set
    }
  render() {
    let applyStyle = this.state.clicked ? 'heading2':'heading1'
    return (
      <div>
        <h1 classname='heading'>{this.state.message}</h1>
        <button onClick={() => this.changeMessage}>Click</button>
      </div>
    )
  }
}
