import React from "react";
import './style.css';
import Switch from "../Switch";

class Lamp extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOn: false,
        };

    }
        clickHandler = () => {
            this.props.callback(this.state);
            this.setState({isOn: !this.state.isOn})};

        handleToSwitch = () => {
            this.setState({isOn: !this.state.isOn});
        }    
    render(){
        const classNames = 'lamp'+ (this.state.isOn? ' lampOn': '');
        const text = (this.state.isOn? 'on' : 'off');
        const handleToSwitch = this.handleToSwitch;
        
        return (
            <div> 
            <div className={classNames} onClick={this.clickHandler}>
                {this.state.isOn}
            </div>
            <p>This lamp is {text}</p>
            <Switch handleToSwitch = {handleToSwitch.bind(this)}/>
            </div>
            
        )
    }
}

export default Lamp;