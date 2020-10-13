import React from 'react';
import BigPanel from '../../common/bigpanel-old';
import Environment from '../../common/environment';
import Player from '../../common/player';
import Menu from '../../common/menu';
import Map from './map';

function WorldMapPage(props) {
    return (
        <div>
            <Menu>
                <Map/>
            </Menu>

            <Environment
                moving = {false}
            />

            <Player
                isCenter = {false}
                isRunning = {false}
                invert = {true}
            />
               
            
        </div>
    );
}

export default WorldMapPage;