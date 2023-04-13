import { createContext, useState } from "react";

export const addProject = (projectList, projectToAdd) => {

};

export const ProjectContext = createContext({
  
  projectList : [],
  setProjectList : () => {},

});

export const ProjectProvider = ({ children }) => {
  const [projectList, setProjectList] = useState(null)
  const value = {projectList, setProjectList};
  
  const addProjectToList = (project) => {
    setProjectList(addProject,project)
 }
 
 return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
};