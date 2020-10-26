import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import '../../../css/modal.css'
import '../../../css/misc.css'
import { AppState, IAchievement } from '../../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { AllActions } from '../../../actions';
import { Link, useHistory } from 'react-router-dom';
import { getAchievement } from '../../../actions/selectors';

interface IAchievementsModal{
    route:string
}

const AchievementsModal: React.FC<IAchievementsModal> = ({route}) => {
    // const [isVisible, setIsVisble] = useState<boolean>(true);
    // const dispatch = useDispatch();
    const history = useHistory();

    const {achievementRoute, imageUrl, issueDate, title, issuedBy, descripList} = useSelector((state: AppState): IAchievement => {
        return getAchievement(state.data, route);
    })

    if(route && achievementRoute == ""){
        history.push("/notfound");
    }

    return (
        <div className="achievements-modal">
            <AnimatePresence>
                {(route && 
                        <motion.div
                            className="modal-container"
                            exit={{transform: "scale(0)"}}
                            initial={{transform: "scale(0)"}}
                            animate={{transform: "scale(1)"}}
                            layoutId={`achievement-container-${route}`}
                            key = {`achievements-modal-${route}`} 
                        >
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <motion.div className="left-view"
                                        // initial={{
                                        //     opacity: 0,
                                        //     transform: "translateX(100px)"
                                        // }}
                                        // animate={{
                                        //     opacity: 1,
                                        //     transform: "translateX(0px)"
                                        // }}
                                        // exit={{
                                        //     opacity: 0,
                                        //     transform: "translateX(100px)"
                                        // }}
                                        // transition={{duration: .4, ease:"easeOut"}}
                                        layoutId={`achievement-image-${route}`}
                                    >
                                        <img
                                            src={imageUrl}
                                        />
                                    </motion.div>
                                </div>
                                <div className="col-12 col-lg-6 text-left">
                                    <motion.div className="right-view khyay"
                                        // initial={{
                                        //     opacity: 0,
                                        //     transform: "translateX(-100px)"
                                        // }}
                                        // animate={{
                                        //     opacity: 1,
                                        //     transform: "translateX(0px)"
                                        // }}
                                        // exit={{
                                        //     opacity: 0,
                                        //     transform: "translateX(-100px)"
                                        // }}
                                        // transition={{duration: .4, ease:"easeOut"}}
                                    >
                                        <p className="color-grey size-20">{issueDate}</p>
                                        <p className="size-40">{achievementRoute}</p>
                                        <p className="size-20 color-grey">{issuedBy}</p>
                                        <div style={{height: "8vh"}}></div>
                                        <div className="descrip-container color-darkgrey khyay">
                                            {
                                                descripList.map((val) => {
                                                    return <p>{val}</p>
                                                })
                                            }
                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                                        </div>
                                    </motion.div>
                                    

                                </div>
                            </div>

                            <motion.div className="modal-cross"
                                whileHover={{
                                    scale: 1.2
                                }}
                                whileTap={{
                                    scale: 0.8
                                }}
                                // onClick={() => {
                                //     // setIsVisble(false);
                                //     dispatch(AllActions.ModalActions.setAchievementModalNotVisible());
                                // }}
                            >
                                <Link to="/achievements">
                                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="240px" height="240px"><path d="M25.707,6.293c-0.195-0.195-1.805-1.805-2-2c-0.391-0.391-1.024-0.391-1.414,0c-0.195,0.195-17.805,17.805-18,18c-0.391,0.391-0.391,1.024,0,1.414c0.279,0.279,1.721,1.721,2,2c0.391,0.391,1.024,0.391,1.414,0c0.195-0.195,17.805-17.805,18-18C26.098,7.317,26.098,6.683,25.707,6.293z"/><path d="M23.707,25.707c0.195-0.195,1.805-1.805,2-2c0.391-0.391,0.391-1.024,0-1.414c-0.195-0.195-17.805-17.805-18-18c-0.391-0.391-1.024-0.391-1.414,0c-0.279,0.279-1.721,1.721-2,2c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,17.805,17.805,18,18C22.683,26.098,23.317,26.098,23.707,25.707z"/></svg>
                                </Link>
                                
                            </motion.div>
                        </motion.div>
                    )
                }

            </AnimatePresence>
        </div>
    );
};

export default AchievementsModal;