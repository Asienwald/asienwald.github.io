import React, { Component } from 'react';

import GroundTile from './groundtile';


class Ground extends Component {

    constructor(props){
        super(props);

        this.state = {
            width: 0,
            height: 0,
            isMoving: this.props.isMoving
        }

        this.groundWidth = 64;
    }

    componentDidMount(props){
        this.updateWindowsDimensions();
        window.addEventListener('resize', this.updateWindowsDimensions.bind(this));
    }

    updateWindowsDimensions(){
        this.groundWidth = (window.innerWidth < 500)? 32 : 64;
        console.log(this.groundWidth);
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    componentWillUnmount(props){
        window.removeEventListener('resize', this.updateWindowsDimensions.bind(this));
    }

    spawnGround(moving = true){
        let numGround = this.state.width / this.groundWidth;
        console.log(`${this.state.width} ${this.groundWidth}`);
        console.log(numGround);
        let groundTiles = [];
        for(let i = 0; i < numGround; i ++){
            groundTiles.push(<GroundTile isMoving = {moving}/>);
        }
        groundTiles.push(<GroundTile isMoving = {moving}/>);

        return groundTiles;
    }

    render() {
        return (
            <div className="w-100 flex-row d-flex position-absolute" style={{
                overflow: "hidden",
                bottom: "0"
                }}>
                {this.spawnGround(this.state.isMoving)}
            </div>
        );
    }
}

export default Ground;