import React from 'react';
import Environment from '../common/environment';
import Menu from '../common/menu';
import Player from '../common/player';
import PageWrapper from '../common/pagewrapper';

function PageWithContent(props) {
    const TransitionedMenu = PageWrapper(Menu);
    return (
        <div>
            <TransitionedMenu>
                {props.children}
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

export default PageWithContent;