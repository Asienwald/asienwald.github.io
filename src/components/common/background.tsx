import React, { Component } from 'react';
import {useSelector} from 'react-redux'
import {AppState} from '../../types/interfaces';

// components
import Parallax from './parallax';


function Background() {

    const {envBg} = useSelector((state: AppState) => {
        return state.env;
    })

    const parallax_1 = `/assets/${envBg}_bg.png`;
    const parallax_2 = `/assets/${envBg}_parallax_2.png`;
    const parallax_3 = `/assets/${envBg}_parallax_3.png`;
    const parallax_4 = `/assets/${envBg}_parallax_4.png`;


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