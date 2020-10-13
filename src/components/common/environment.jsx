import React, { Component } from 'react';

import Ground from './ground';
import Background from './background';


function Environment(props) {
    return (
        <div>
            <Ground
                moving = {props.moving}
            />
            <Background
                moving = {props.moving}
            />
        </div>
    );
}

export default Environment;