import { createContext, useState } from "react";
import TESTPROJECT from './test.json';

const addProject = (projectList, projectToAdd) => {
  return [...projectList, { projectToAdd }]
};

const removeProject = (projectList, projectToRemove) => {
  return projectList.filter((project) => projectToRemove !== project.id)
};

export const ProjectContext = createContext({
  projectList : [],
  setProjectList : () => {},
  currentProject : null,
  setCurrentProject : () => {},
});

export const ProjectProvider = ({ children }) => {
  const [projectList, setProjectList] = useState(TESTPROJECT)
  const [currentProject, setCurrentProject] = useState(null);
  const addProjectToList = (projectToAdd) => {
    setProjectList(addProject(projectList,projectToAdd))
  }
  const removeProjectFromList = (projectToRemove) => {
    setProjectList(removeProject(projectList,projectToRemove))
  }
  const value = {
    projectList, 
    currentProject,
    setProjectList,
    addProjectToList,
    removeProjectFromList,
    setCurrentProject,
  };
  
 return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
};