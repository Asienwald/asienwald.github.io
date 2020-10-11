import React, { Component } from 'react';

import '../../css/ground.css';


class Ground extends Component {
    constructor(props){
        super(props);

        this.state = {
            ground: [],
            groundAnimEnd: false,
            moving: this.props.moving
        }

        // this.moving = true;
    }

    spawnGroundTile(start){
        if (!this.state.moving){
            let spawnedGroundTile = <div 
            className="ground position-absolute" 
            style = {{
                animationPlayState: "paused",
                right: `0vw`
            }}
            ></div>

            return spawnedGroundTile;
        }

        let spawnedGroundTile = <div 
            className="ground position-absolute" 
            style = {{
                right: `${start}vw`
            }}
            onAnimationEnd={() => this.setState({groundAnimEnd: true})}
        ></div>

        console.log("spawning!");

        return spawnedGroundTile;
    }

    spawnGround(){
        // this.setState(state => {
        //     state.ground.push(this.spawnGroundTile(0));
        //     state.ground.push(this.spawnGroundTile(-100));

        //     console.log(state.ground)
        //     return state;
        // })

        let ground = this.state.ground;
        ground.push(this.spawnGroundTile(0));
        ground.push(this.spawnGroundTile(-100));
        this.setState({ground: ground});

        // console.log(this.ground);
    }

    componentDidMount(props){
        // console.log(this.groundTile);
        this.spawnGround();
    }

    componentDidUpdate(props, state){

        if(this.state.groundAnimEnd === true){
            this.setState({groundAnimEnd: false});
        }
    }

    render() {
        return (
            <div>
                {(this.state.groundAnimEnd === false)? this.state.ground :null}
            </div>
        );
    }
}

export default Ground;