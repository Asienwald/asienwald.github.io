import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import '../../../css/modal.css'
import '../../../css/misc.css'
import { AppState, IProject } from '../../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router';
import { AllActions } from '../../../actions';
import { Link } from 'react-router-dom';
import { Scroll } from 'framer';
import {getProject} from '../../../actions/selectors';

interface IProjectsModal{
    route: string
}

const ProjectsModal: React.FC<IProjectsModal> = ({
    route
}) => {
    // const [isVisible, setIsVisble] = useState<boolean>(true);
    // const dispatch = useDispatch();
    // const route = match.params;
    const history = useHistory();

    console.log(route);

    const {
        projectRoute,
        imageUrlList,
        projectTitle,
        projectPeriod,
        tags,
        builtWith,
        projectLink,
        descripList
    } = useSelector((state: AppState): IProject => {
        return getProject(state.data, route);
    })

    if(route && projectRoute == ""){
        history.push("/notfound");
    }


    return (
        <div className="projects-modal">
            <AnimatePresence>
                {(route &&
                    <motion.div
                        className="modal-container"
                        exit={{transform: "scale(0)"}}
                        initial={{transform: "scale(0)"}}
                        animate={{transform: "scale(1)"}}
                        layoutId={`project-container-${route}`}
                        key = {`projects-modal-${route}`}  
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
                                    layoutId={`project-image-${route}`}
                                >
                                    <img
                                        src={imageUrlList[0]}
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
                                    <p className="color-grey size-20">{projectPeriod}</p>
                                    <p className="size-40">{route}</p>
                                    
                                    <p className="size-20 color-grey">{
                                        tags.join(", ")
                                    }</p>
                                    <div className="">
                                        <img
                                            src="/assets/link.png"
                                            className="link-icon m-0"
                                        />
                                        <a className="khyay color-grey size-20 ml-2 mt-5 " target="_blank"
                                            href={projectLink}
                                        >Project Link</a>
                                    </div>
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
                            //     // dispatch(AllActions.ModalActions.setProjectModalNotVisible());
                            //     history.push("/projects/");
                            // }}
                        >
                            <Link to="/projects">
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="240px" height="240px"><path d="M25.707,6.293c-0.195-0.195-1.805-1.805-2-2c-0.391-0.391-1.024-0.391-1.414,0c-0.195,0.195-17.805,17.805-18,18c-0.391,0.391-0.391,1.024,0,1.414c0.279,0.279,1.721,1.721,2,2c0.391,0.391,1.024,0.391,1.414,0c0.195-0.195,17.805-17.805,18-18C26.098,7.317,26.098,6.683,25.707,6.293z"/><path d="M23.707,25.707c0.195-0.195,1.805-1.805,2-2c0.391-0.391,0.391-1.024,0-1.414c-0.195-0.195-17.805-17.805-18-18c-0.391-0.391-1.024-0.391-1.414,0c-0.279,0.279-1.721,1.721-2,2c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,17.805,17.805,18,18C22.683,26.098,23.317,26.098,23.707,25.707z"/></svg>
                            </Link>  
                            
                        </motion.div>
                        
                    </motion.div>
                    
                )}

            </AnimatePresence>
        </div>
    );
};

export default ProjectsModal;