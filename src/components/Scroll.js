import React from "react";

const Scroll = (props) => {
    return (
        <div className='container-fluid'>
            {props.children}
        </div>
    )    
};

export default Scroll;


// style={{overflow: "scroll", border: "1px solid black", height: '500px'}}