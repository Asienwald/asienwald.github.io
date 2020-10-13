import React from 'react';
import '../../css/misc.css';

function Title(props) {
    return (
        <div>
            <h1 className="color-orange size-50 text-left mb-3 title">
                {props.text}
            </h1>
        </div>
    );
}

export default Title;