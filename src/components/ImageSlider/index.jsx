import React, { Component } from "react";
import ImageSliderData from "../ImageSliderData";
import TextDisplay from "../TextDisplay";
import SlideDisplay from "../SlideDisplay";
import styles from './style.module.css';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // sliderData: sliderArray,
            counter: 0,
            intervalTime: 3000,
        }
    }

    render(){
        return
        <h1>NEBULAS</h1>
    }
}

export default ImageSlider;
