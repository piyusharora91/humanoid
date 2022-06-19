import React from 'react';
const Scroll = (props) => {
    return (
        <div style={{ height: '77vh', overflow: 'scroll', border: '5px solid black' }}>
            {props.children}
        </div>);
}

export default Scroll;