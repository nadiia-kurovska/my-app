import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {

    getInput = (value) => {
        console.log("parent console", value)
    }

  render() {
    return (
      <Input getInput = {this.getInput}/>
    )
  }
}
