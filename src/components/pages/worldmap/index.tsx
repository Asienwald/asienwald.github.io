import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from '../../common/menu';
import Map from './map';
import PageWithContent from '../pagewithcontent';


function WorldMapPage() {

    return (
        <div>

            {/* <ReactCSSTransitionGroup
                transitionAppear = {true}
                transitionAppearTimeout = {600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'PopIn'}
            >
                <Menu>
                    <Map/>
                </Menu>
                
            </ReactCSSTransitionGroup> */}

            {/* <AnimatePresence exitBeforeEnter>
                <Menu>
                    <Map/>
                </Menu>
            </AnimatePresence> */}

            <PageWithContent>
                <Map/>
            </PageWithContent>
               
        </div>
    );
}

export default WorldMapPage;