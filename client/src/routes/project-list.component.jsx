import ProjectForm from '../components/project-form/project-form.component';
import NewProjectForm from '../components/new-project-form/newProjectForm.component';
import { useContext, useState } from 'react';
import { ProjectContext } from '../contexts/project.context';
import './project-list.style.scss';


const ProjectList = () => {

  const { projectList } = useContext(ProjectContext);
    
  const [newProjectFormVisible,setNewProjectFormVisible] = useState(false);
  
  //set newProjectFormVisible true when new-project-btn clicked
  //set newProjectFormVisible false when close-btn clicked in newProjectForm
  const toggleFormVisible = () => {
    setNewProjectFormVisible(!newProjectFormVisible);
  }
  
  return (
    <div className='project-body'>
      <div className='project-slider'>
        { newProjectFormVisible && 
           <NewProjectForm onClose={toggleFormVisible}/> 
        }
        <button className='new-project-btn' onClick={toggleFormVisible}>
          +프로젝트 추가
        </button>
        {projectList.map((project) => (
          <ProjectForm key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

