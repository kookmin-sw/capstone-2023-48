import ProjectForm from '../components/project-form/project-form.component';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/project.context';
import './project-list-style.scss';

const ProjectList = () => {

  const { projectList } = useContext(ProjectContext);

  return (
    <div className='project-wrapper'>
      {projectList ? (
        projectList.map((project) => {
          <ProjectForm key={project.id} project={project}/>
        })
      ) : (
        // <div>아직 프로젝트가 없습니다!</div>
        <ProjectForm/>
      )}
    </div>
  );
};

export default ProjectList;