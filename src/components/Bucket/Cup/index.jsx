import React, { Component } from 'react'

export default class Cup extends Component {
    constructor (props) {
        super(props);

        this.state = {
            volume: 8,
        }
    }
    clickHandler = () => {
        this.props.getEmpty(this.state.volume)
    }
  
    render() {
    return (
      <button onClick={this.clickHandler}></button>
    )
  }
}