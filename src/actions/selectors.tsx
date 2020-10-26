import {IAchievement, IDataState, IProject} from '../types/interfaces';

export function getProject(state: IDataState, projectRoute: string): IProject{
    let project: IProject = {
        projectRoute: "",
        imageUrlList: [],
        projectTitle: "",
        projectPeriod: "",
        tags: [],
        builtWith: [],
        projectLink: "",
        descripList: []
    }
    state.projects.map((val) => {
        if(val.projectRoute == projectRoute){  
            project = val;
            return;
        }
    })
    
    return project;
    // return state.projects.filter((proj) => proj.projectRoute === projectRoute)[0];
}

export function getAchievement(state: IDataState, achievementRoute: string): IAchievement{
    let found = false;
    let achievement: IAchievement = {
        achievementRoute: "",
        imageUrl: "",
        issueDate: "",
        title: "",
        issuedBy: "",
        descripList: []
    }
    state.achievements.awards.map((val) => {
        if(val.achievementRoute == achievementRoute){
            found = true;
            achievement = val;
            return;
        }   
        
    })
    if(!found){
        state.achievements.certs.map((val) => {
            if(val.achievementRoute == achievementRoute){
                achievement = val;
                return;
            }          
        })
    }
    return achievement;
}