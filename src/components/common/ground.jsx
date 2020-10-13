import React, { useEffect, useState } from 'react';

import '../../css/ground.css';


function Ground(props) {

    const [ground, setGround] = useState([]);
    const [moving, setMoving] = useState(props.moving);

    const spawnGroundTile = (start) => {
        if(!moving){
            let spawnedGroundTile = <div 
            className="ground position-fixed" 
            style = {{
                animationPlayState: "paused",
                right: `0vw`
            }}
            ></div>

            return spawnedGroundTile;
        }else{
            let spawnedGroundTile = <div 
                className="ground position-fixed" 
                style = {{
                    right: `${start}vw`,
                    animationPlayState: "running"
                }}
            ></div>

            return spawnedGroundTile;
        }
    }

    const spawnGround = () => {
        let _ground = [];
        _ground.push(spawnGroundTile(0));
        _ground.push(spawnGroundTile(-100));
        setGround(_ground);
    }


    useEffect(() => {
        spawnGround();
    }, [])

    // spawn ground again when moving changes
    useEffect(() => {
        spawnGround();
    }, [moving])


    return (
        <div className="text-center">
            {ground}
            <div className="position-fixed text-white text-center footer size-20"
            >
                <p className="m-0 p-0">designed and coded by me in reactjs :D</p>
                <p>© 2020 Loh Kar Wei All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Ground;