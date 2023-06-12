import React from "react";
import './style.css';

class Lamp extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOn: false,
        };
    }

    render(){
    
        return (
            <div 
                className={`lamp`}
                onClick={() => this.setState({isOn:true})}>
                {this.state.isOn}
                </div>
        )
    }
}

export default Lamp;