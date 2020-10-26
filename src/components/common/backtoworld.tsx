import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import '../../css/misc.css';
import { AppState, IEnvState } from '../../types/interfaces';
import {motion} from 'framer';

function BackToWorld() {
    const history = useHistory();
    const location = useLocation();

    const showBack = useSelector((state: AppState) => {
        return state.env.backToWorld
    })


    const backToWorld = () => {
        history.push("/worldmap")
    }

    useEffect(() => {
        console.log("Window location changed");
    }, [location])

    return (
        <div className="back-world"
            // whileHover={{
            //     scale: 1.1
            // }}
            // whileTap = {{
            //     scale: 0.8
            // }}
        >
            <div
                onClick={() => {backToWorld()}}
                className = {(showBack) ? "d-flex flex-row text-white show" : "d-flex flex-row text-white hide"}
            >
                <div className="back-world-icon"></div>
                <p className="size-30 my-auto text-left ml-3">back to world map</p>
            </div>
        </div>
    );
}

export default BackToWorld;