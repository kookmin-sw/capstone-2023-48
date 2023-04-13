import Navigation from '../components/navigation/navigation.component';
import ProjectForm from '../components/project-form/project-form.component';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/project.context';


const ProjectList = () => {

  const { projectList } = useContext(ProjectContext);

  return (
    <div>
      <Navigation/>
      {projectList ? (
        projectList.map((project) => {
          <ProjectForm key={project.id} project={project}/>
        })
      ) : (
        <span>아직 프로젝트가 없습니다!</span>
      )}
    </div>
  );
};

export default ProjectList;