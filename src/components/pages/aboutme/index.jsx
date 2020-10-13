import React from 'react';
import PageWithContent from '../pagewithcontent';

import PlayerStats from './playerstats';

function AboutMePage(props) {

    return (
        <div>
            <PageWithContent>
                <PlayerStats/>
            </PageWithContent>
        </div>
    );
}

export default AboutMePage;