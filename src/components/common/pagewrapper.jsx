import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../css/transitions.css';

const PageWrapper = Page => {
    return props => 
        <div>
            <ReactCSSTransitionGroup
                transitionAppear = {true}
                transitionAppearTimeout = {600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'SlideIn'}
            >

                <Page {...props}/>
            </ReactCSSTransitionGroup>
        </div>
    
}

export default PageWrapper;