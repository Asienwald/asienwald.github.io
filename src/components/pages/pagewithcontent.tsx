import { AnimatePresence } from 'framer-motion';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from '../common/menu';


const PageWithContent: React.FC = ({children}) => {
    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                <Menu>
                    {children}
                </Menu>

            </AnimatePresence>
        </div>
    );
};



export default PageWithContent;