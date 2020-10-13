import React from 'react';
import Environment from '../../common/environment';
import Menu from '../../common/menu';
import Player from '../../common/player';
import PlayerStats from './playerstats';

function AboutMePage(props) {
    return (
        <div>
            <Menu>
                <PlayerStats/>
            </Menu>

            <Player
                isCenter = {false}
                isRunning = {true}
            />

            <Environment
                moving = {true}
            />
        </div>
    );
}

export default AboutMePage;