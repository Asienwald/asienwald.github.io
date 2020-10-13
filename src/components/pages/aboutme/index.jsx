import React from 'react';
import Environment from '../../common/environment';
import Menu from '../../common/menu';
import Player from '../../common/player';
import PlayerStats from './playerstats';
import PageWrapper from '../../common/pagewrapper';

function AboutMePage(props) {
    const TransitionedMenu = PageWrapper(Menu);

    return (
        <div>
            <TransitionedMenu>
                <PlayerStats/>
            </TransitionedMenu>

            <Player
                isCenter = {false}
                isRunning = {true}
            />

            <Environment
                moving = {true}
                showBack = {true}
            />
        </div>
    );
}

export default AboutMePage;