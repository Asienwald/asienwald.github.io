import React from 'react';
import {AnimateSharedLayout, motion} from 'framer-motion'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../types/interfaces';
import { AllActions } from '../../actions';
import '../../css/misc.css'
import '../../css/envbtn.css'

const EnvButton = () => {
    const dispatch = useDispatch();
    const {envBg, bgCount, bgList} = useSelector((state: AppState) => {
        return state.env;
    })

    const changeBg = () => {
        let _currentCount = bgList.indexOf(envBg);
        let _count = ((_currentCount + 1 < bgCount))? _currentCount + 1: 0;
        dispatch(AllActions.EnvActions.changeEnvironment(bgList[_count]))
    }

    return (
        <AnimateSharedLayout type="crossfade">
            <motion.img
                src={`/assets/${envBg}.svg`}
                key="env-btn "
                layoutId={`env-btn`}
                className="env-btn"
                whileHover={{
                    scale: 1.2
                }}
                whileTap={{
                    scale: 0.8
                }}
                onClick={() => {
                    changeBg();
                }}
            />
        </AnimateSharedLayout>
    );
};

export default EnvButton;