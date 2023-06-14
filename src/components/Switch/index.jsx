import React from "react";
import styles from './Switch.module.scss';

class Switch extends React.Component {

    render(){
        const handleToSwitch = this.props.handleToSwitch;
        return (<button className={styles.btn} onClick={() => handleToSwitch()}>Light switch</button>)
    }
}

export default Switch;