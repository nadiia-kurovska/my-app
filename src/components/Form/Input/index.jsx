import React, { Component } from 'react'

export default class Input extends Component {
    submmitHandler = (e) => {
       this.props.getInput(e.target.value);
    }
    
  render() {

    return (
      <input type='text' onBlur={this.submmitHandler} />
    )
  }
}
