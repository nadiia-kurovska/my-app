import React from "react";

function FlexContainer(props) {
    const {children} = props;

    return (
        <p style={{ color: '#33e'}}>
            <ul>{children}</ul>
        </p>
    );
}


export default FlexContainer;