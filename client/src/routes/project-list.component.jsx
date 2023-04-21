import ProjectForm from '../components/project-form/project-form.component';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/project.context';
import './project-list-style.scss';

const ProjectList = () => {

  const { projectList } = useContext(ProjectContext);
  console.log(projectList);
  return (
    <div className='project-wrapper'>
      {projectList.map((project) => (
        <ProjectForm key={project.id} project={project}/>
      ))}
      <button>
        +프로젝트 추가
      </button>
    </div>
  );
};

export default ProjectList;