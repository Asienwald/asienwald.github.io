import React, { Component, useState } from 'react';

import "../../css/player.css";



function Player(props) {
    const [isCenter, setIsCenter] = useState(props.isCenter);
    const [isRunning, setIsRunning] = useState(props.isRunning);
    const [invert, setInvert] = useState(props.invert);

    

    return (
        <div className = {
            (isCenter) ? "player center-middle" : "player"
        } style={{
            animationName: (isRunning)? "animate-running": "animate-idle",
            transform: `scaleX(${() => {
                if(invert) return -1;
                else if(invert && isRunning) return 1;
                else return 1.1;
            }})`
        }}>
        </div>
    );
}

export default Player;