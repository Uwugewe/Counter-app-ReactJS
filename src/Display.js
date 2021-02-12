import React from 'react';
import './Display.css';

const Display = (props) => {
    let classNameValue = 'textblue';
    if(props.displayValue <= 5) {
        classNameValue = 'textblue';
    } else {
        classNameValue = 'textred';
    }

    return (
        <div>
            <div className={`licznik ${classNameValue}`}>
                {props.displayValue}
            </div>
        </div>
    )
}

export default Display;