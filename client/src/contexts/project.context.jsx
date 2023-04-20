import { createContext, useState } from "react";

const addProject = (projectList, projectToAdd) => {
  return [...projectList, { projectToAdd }]
};

const removeProject = (projectList, projectToRemove) => {
  return projectList.filter((project) => projectToRemove !== project.id)
};

export const ProjectContext = createContext({
  projectList : [],
  setProjectList : () => {},
});

export const ProjectProvider = ({ children }) => {
  const [projectList, setProjectList] = useState(null)
  
  const addProjectToList = (projectToAdd) => {
    setProjectList(addProject(projectList,projectToAdd))
  }
  const removeProjectFromList = (projectToRemove) => {
    setProjectList(removeProject(projectList,projectToRemove))
  }
  const value = {
    projectList, 
    setProjectList,
    addProjectToList,
    removeProjectFromList,
  };
  
 return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
};