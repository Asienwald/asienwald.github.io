import React from 'react';
import Environment from '../../common/environment';
import Player from '../../common/player';
import Menu from '../../common/menu';
import Map from './map';

import PageWrapper from '../../common/pagewrapper';


function WorldMapPage() {
    const TransitionedMenu = PageWrapper(Menu);

    return (
        <div>
            <TransitionedMenu>
                <Map/>
            </TransitionedMenu>

            {/* <Environment/>

            <Player/> */}
               
        </div>
    );
}

export default WorldMapPage;