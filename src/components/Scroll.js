import React from 'react';
const Scroll = (props) => {
    return (
        <div style={{ height: '566px', overflow: 'scroll', border: '5px solid black' }}>
            {props.children}
        </div>);
}

export default Scroll;