import React, { Component } from 'react';
import {useSelector} from 'react-redux'
import {IEnvState} from '../../types/interfaces'

// components
import Parallax from './parallax';


function Background() {
    const parallax_1 = "/assets/forest_bg.png";
    const parallax_2 = "/assets/forest_parallax_2_small.png";
    const parallax_3 = "/assets/forest_parallax_3_small.png";
    const parallax_4 = "/assets/forest_parallax_4_med.png";

    // const moving = useSelector((state: IEnvState) => {
    //     return state.env.moving
    // })

    return (
        <div>
            <Parallax image={parallax_1} index={0}/>
            <Parallax image={parallax_2} index={24} />
            <Parallax image={parallax_3} index={16}/>
            <Parallax image={parallax_4} index={10}/>
        </div>
    );
}

export default Background;