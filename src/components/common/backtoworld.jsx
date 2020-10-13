import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../css/misc.css';

function BackToWorld(props) {
    const history = useHistory();
    const location = useLocation();


    const backToWorld = () => {
        history.push("/worldmap")
    }

    useEffect(() => {
        
    }, [location])

    return (
        <div className="back-world">
            <div
                onClick={() => {backToWorld()}}
                className = {(props.showBack) ? "d-flex flex-row text-white show" : "d-flex flex-row text-white hide"}
            >
                <div className="back-world-icon"></div>
                <p className="size-30 my-auto text-left ml-3">back to world map</p>
            </div>
        </div>
    );
}

export default BackToWorld;