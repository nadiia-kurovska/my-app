import React from "react";
import styles from './Image.module.css';

function Image(props) {
    const {width,height,style, children, ...restProperties} = props;

    const divstyles = {
        ...style,
        width: width,
        height: height,
    };


 return (
    <div style={divstyles} className={styles.wrapper} {...restProperties}>
        {children} //not necessary. can be deleted from destructuring and then should not be mentioned here as it is a propc
    </div>
 )


}

export default Image;