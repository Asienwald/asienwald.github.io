import React, { Component } from 'react';
import '../../css/background.css';

class Parallax extends Component {
    constructor(props){
        super(props);

        this.state = {
            bg: [],
            bgAnimEnd: false,
            moving: this.props.moving
        }
        this.count = -1;
    }

    spawnParallax(start){
        if(!this.state.moving){
            let spawnedBg = <div 
                className="parallax" 
                style={{
                    right: `${start}vw`,
                    backgroundImage: `url('${this.props.image}')`,
                    animationPlayState: "paused"
                }}
            ></div>
            
            return spawnedBg;
        }

        let count = this.count;
        this.count = count + 1;
        let spawnedBg = <div 
            key = {this.count}
            className="parallax" 
            style={{
                right: `${start}vw`,
                backgroundImage: `url('${this.props.image}')`,
                animationDuration: `${this.props.index}s`
            }}
            onAnimationEnd={() => this.setState({bgAnimEnd: true})}
            // onAnimationStartCapture
        ></div>
        
        // console.log(spawnedBg);
        console.log("spawning parallax!");
        return spawnedBg;
    }

    spawnBackground(){
        // this.setState(state => {
        //     state.bg.push(this.spawnParallax(0));
        //     state.bg.push(this.spawnParallax(-100));

        //     // console.log(state.bg)
        //     return state;
        // })

        let bg = this.state.bg;
        bg.push(this.spawnParallax(0));
        bg.push(this.spawnParallax(-100));

        this.setState({bg: bg});


        return this.state.bg;
    }

    componentDidMount(props){
        this.spawnBackground();
    }

    componentDidUpdate(props, state){
        if(this.state.bgAnimEnd === true){
            this.setState({bgAnimEnd: false});
        }
    }

    render() {
        // let bgList = (this.state.bgAnimEnd === false)? this.state.bg :null
        // bgList.map((list, index) => {
            
        // })
        return (
            <div className="w-100 h-100">
                {(this.state.bgAnimEnd === false)? this.state.bg :null}
                {/* {this.spawnParallax(-200)} */}
            </div>
        );
    }
}

export default Parallax;