import React, { Component } from 'react';

import "../../css/player.css";



class Player extends Component {
    constructor(props){
        super(props);

        this.state = {
            isCenter: this.props.isCenter,
            isRunning: this.props.isRunning,
            invert: false
        };
    }



    render() {
        return (
            <div className = {
                (this.state.isCenter) ? "player center-middle" : "player"
            } style={{
                animationName: (this.state.isRunning)? "animate-running": "animate-idle",
                transform: `scaleX(${(this.state.invert?-1:1)})`
            }}>
            </div>
        );
    }
}

export default Player;