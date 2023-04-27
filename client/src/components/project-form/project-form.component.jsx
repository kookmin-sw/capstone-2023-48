import {React, useContext} from 'react';
import InviteButton from '../button/invite-button.component';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../contexts/project.context';
import './project-form.style.scss';

const ProjectForm = ({project}) => {

  const {setCurrentProject} = useContext(ProjectContext);
  const setCurrentProjectToContext = () => setCurrentProject(project);

  const {
    projectName, 
    places,
    placeImgSrc,
    projectMember,
    projectDate
  } = project;

  return(
    <div className="project-form-wrapper" style={{backgroundImage: `url(${placeImgSrc}`}}>
      <Link to='/mainpage' className='project-form-link' onClick={setCurrentProjectToContext}>
        <div className='project-form-upside'>
          <h2 className='project-name'>{projectName}</h2>
          <p className='project-places'>{places}</p>
        </div>
        <div className='project-form-downside'>
          <p className='project-date'>{projectDate}</p>
          <div className='project-form-member'>
            <p className='project-member'>{projectMember}</p>
            <InviteButton/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectForm;





