import React from "react";
import styles from './Switch.module.scss';

class Switch extends React.Component {
    

    render(){
        const handleToSwitch = this.props.handleToSwitch;
        return (
            <div>
                <button className={styles.btn} onClick={handleToSwitch}>Light switch</button>
            </div>
        
        )
    }
}

export default Switch;