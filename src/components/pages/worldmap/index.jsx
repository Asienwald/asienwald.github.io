import React from 'react';
import BigPanel from '../../common/bigpanel-old';
import Environment from '../../common/environment';
import Player from '../../common/player';
import Menu from '../../common/menu';
import Map from './map';

import PageWrapper from '../../common/pagewrapper';

function WorldMapPage(props) {
    const TransitionedMenu = PageWrapper(Menu);

    return (
        <div>
            <TransitionedMenu>
                <Map/>
            </TransitionedMenu>

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