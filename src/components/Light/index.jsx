import React from "react";
import Lamp from "../Lamp";
import Switch from "../Switch";

class Light extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOn: true,
        };
      }

			handleToSwitch = () => {
        this.setState({isOn: !this.state.isOn});
    }; 
	

    render() {
        return(
            <>  
                <Lamp isOn = {this.state.isOn}/>
                <Switch handleToSwitch ={this.handleToSwitch}/>
            </>
				)
    };

    };  

export default Light;