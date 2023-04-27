import ProjectForm from '../components/project-form/project-form.component';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/project.context';
import './project-list.style.scss';



const ProjectList = () => {

  const { projectList } = useContext(ProjectContext);
  
  return (
    <div className='project-body'>
      <button className='prev-btn'>
         {'<'}
      </button>
      <div className='project-slider'>
        <button onClick={()=>{}}>
          +프로젝트 추가
        </button>
        {projectList.map((project) => (
          <ProjectForm key={project.id} project={project}/>
        ))}
      </div>
      <button className='next-btn'>
         {'>'}
      </button>
    </div>
  );
};

export default ProjectList;

