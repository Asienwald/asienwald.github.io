import React, { Component } from 'react';
import '../../css/ground.css';


class GroundTile extends Component {
    render() {
        return (
            <div className="ground-tile" style={
                (this.props.isMoving)?
                    {animationPlayState: "running"}
                :{animationPlayState: "paused"}
            }>
                
            </div>
        );
    }
}

export default GroundTile;