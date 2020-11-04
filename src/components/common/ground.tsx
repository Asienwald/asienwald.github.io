import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import {AppState} from '../../types/interfaces'

import '../../css/ground.css';


function Ground() {

    const [ground, setGround] = useState<JSX.Element[]>([]);

    const {moving, envBg} = useSelector((state: AppState) => {
        return state.env;
    })

    const spawnGroundTile = (start: number) => {
        if(!moving){
            let spawnedGroundTile = <div 
            className="ground position-fixed" 
            style = {{
                animationPlayState: "paused",
                right: `${start}vw`,
                backgroundImage: `url("/assets/${envBg}_ground.png")`
            }}
            ></div>

            return spawnedGroundTile;
        }else{
            let spawnedGroundTile = <div 
                className="ground position-fixed" 
                style = {{
                    right: `${start}vw`,
                    animationPlayState: "running",
                    backgroundImage: `url("/assets/${envBg}_ground.png")`
                }}
            ></div>

            return spawnedGroundTile;
        }
    }

    const spawnGround = () => {
        let _ground: JSX.Element[] = [];  
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
    }, [moving, window.innerWidth, envBg])


    return (
        <div className="text-center">
            {ground}
            <div className="position-fixed text-white text-center footer size-20"
            >
                <p className="m-0 p-0">designed and coded by me in reactjs :D</p>
                <p>© 2020 Loh Kar Wei All Rights Reserved</p>
            </div>
            <div className="position-fixed footer-icons d-flex flex-row">
                <a target="_blank" href="https://www.linkedin.com/in/kar-wei-loh">
                    <i className="fab fa-linkedin text-white footer-icon" ></i>
                </a>

                <a target="_blank" href="https://github.com/Asienwald">
                    <i className="fab fa-github-square text-white footer-icon" ></i>
                </a>
            </div>
        </div>
    );
}

export default Ground;