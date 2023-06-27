import React from "react";
import './style.css';

class Lamp extends React.Component {
    

    render(){
        const classNames = 'lamp'+ (this.props.isOn? ' lampOn': '');
        const text = (this.props.isOn? 'on' : 'off');

        
        return (
            <div> 
            <div className={classNames}>
                {this.props.isOn}
            </div>
            <p>This lamp is {text}</p>
            </div>
            
        )
    };
}

export default Lamp;