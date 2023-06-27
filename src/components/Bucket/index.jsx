import React, { Component } from 'react';
import Cup from './Cup';

export default class Bucket extends Component {
    constructor (props) {
        super(props);

        this.state = {
            capacity: 20,
        }
    }

    getEmpty = (volume) => {
        if (this.state.capacity < volume) {
            return
        }
        this.setState({capacity: this.state.capacity - volume})
    }

  render() {
    return (
      <>
        <Cup getEmpty = {this.getEmpty}/>
        <div>{this.state.capacity}</div>
      </>
    )
  }
}
