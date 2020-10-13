import React, { Component, useEffect, useState } from 'react';
import '../../css/background.css';


function Parallax(props) {
    const [bg, setBg] = useState([]);
    const [moving, setMoving] = useState(props.moving);

    const spawnParallax = (start) => {
        if(!moving){
            let spawnedBg = <div 
                className="parallax" 
                style={{
                    right: `${start}vw`,
                    backgroundImage: `url('${props.image}')`,
                    animationPlayState: "paused"
                }}
            ></div>
            
            return spawnedBg;
        }else{
            let spawnedBg = <div 
                className="parallax" 
                style={{
                    right: `${start}vw`,
                    backgroundImage: `url('${props.image}')`,
                    animationDuration: `${props.index}s`,
                    animationPlayState: "running"
                }}
            ></div>

            return spawnedBg;
        }
    }

    const spawnBackground = () => {
        let _bg = [];
        _bg.push(spawnParallax(0));
        _bg.push(spawnParallax(-100));
        setBg(_bg);
    }

    useEffect(() => {
        spawnBackground();
    }, [])


    return (
        <div className="w-100 h-100">
            {bg}
        </div>
    );
}

export default Parallax;