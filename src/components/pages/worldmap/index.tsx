import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from '../../common/menu';
import Map from './map';

import PageWrapper from '../../common/pagewrapper';


function WorldMapPage() {
    const TransitionedMenu = PageWrapper(Menu);

    return (
        <div>

            <ReactCSSTransitionGroup
                transitionAppear = {true}
                transitionAppearTimeout = {600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'PopIn'}
            >
                <Menu>
                    <Map/>
                </Menu>
                
            </ReactCSSTransitionGroup>
               
        </div>
    );
}

export default WorldMapPage;