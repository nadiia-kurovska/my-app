import React from "react";

function FlexContainer(props) {
    const {children} = props;

    return (
        <div style={{ color: '#33e'}}>
            <ul>{children}</ul>
        </div>
    );
}


export default FlexContainer;