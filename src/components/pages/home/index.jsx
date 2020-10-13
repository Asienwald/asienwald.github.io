import React, { Component } from 'react';

//components
import Player from '../../common/player';
import Environment from '../../common/environment';
import Panel from './panel';


function HomePage(props) {
    return (
        <div>
            <Panel/>

            <Player
                isCenter = {true}
                isRunning = {true}
            />

            <Environment
                moving = {true}
            />
        </div>
    );
}

export default HomePage;