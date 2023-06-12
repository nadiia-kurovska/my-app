import React from "react";
import './style.css';

class Lamp extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOn: false,
        };
    }
        clickHandler = () => {
            this.props.callback(this.state);
            this.setState({isOn: !this.state.isOn})}

    render(){
        const classNames = 'lamp'+ (this.state.isOn? ' lampOn': '');
        return (
            <div 
                className={classNames}
                onClick={this.clickHandler}>
                {this.state.isOn}
                </div>
        )
    }
}

export default Lamp;