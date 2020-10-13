import React from 'react';

import Panel from './panel';
import Player from '../../common/player';
import Environment from '../../common/environment';

function NotFound(props) {
    return (
        <div>
            <Panel/>

            <Player
                isCenter = {true}
                isRunning = {false}
                invert={false}
            />

            <Environment
                moving = {false}
            />

        </div>
    );
}

export default NotFound;