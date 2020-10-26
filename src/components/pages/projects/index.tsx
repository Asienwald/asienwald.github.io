import React, { useEffect, useState } from 'react';
import PageWithContent from '../pagewithcontent'
import Title from '../../common/title'
import ProjectCarousel from './projectCarousel';
import ProjectsModal from './projectsModal';
import { AnimatePresence, AnimateSharedLayout } from 'framer';

interface match{
    match: any
}

const ProjectsPage: React.FC<match> = ({
    match
}) => {
    // const [route, setRoute] = useState(match.params.route);
    const {route} = match.params;
    // console.log(match.params);
    // console.log(route);
    // console.log(route == undefined)

    // if(route){
    //     console.log("BRO FUCK U")
    // }

    return (
        <div>
            {/* <AnimatePresence> */}
                <PageWithContent>
                    <Title
                        text = "Player Projects"
                    />

                    <ProjectCarousel
                        title="projects"
                        route = {route}
                    />

                    
                    
                </PageWithContent>
                
                    {/* {route && <ProjectsModal route={route} key="projects-modal"/>}  */}
                <ProjectsModal route={route} key={`projects-modal-${route}`}/>
            {/* </AnimatePresence> */}
        </div>
    );
};

export default ProjectsPage;