import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../css/misc.css';
import '../../../css/homepanel.css';

function Panel(props) {
    const history = useHistory();

    const toHome = () =>{
        history.push("/worldmap");
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-5 mx-auto position-relative home-panel not-found-panel">
                    <div className="h-100 w-100 d-flex flex-column justify-content-end text-white p-0">
                        <h1 className="size-60 color-red">:(</h1>
                        <h1 className="size-60 color-red">Not found!</h1>
                        <p className="size-40 mb-3 mt-4">The page you are looking for is either in progress or don't exist!</p>

                        <button 
                            className="start-btn size-40 mb-2 mt-3"
                            onClick = {() => toHome()}
                        >back to worldmap</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Panel;