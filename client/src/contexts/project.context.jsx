import React, { createContext, useState } from "react";

export const ProjectContext = createContext({
  projectList : [],
  setProjectList : () => {},
  currentProject : null,
  setCurrentProject : () => {},
});

export const ProjectProvider = ({ children }) => {
  const [projectList, setProjectList] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  const value = {
    projectList, 
    currentProject,
    setProjectList,
    setCurrentProject,
  };
  
 return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
};