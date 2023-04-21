import {React, useContext} from 'react';
import InviteButton from '../button/invite-button.component';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../contexts/project.context';

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
    <div className="project" style={{backgroundImage: `url(${placeImgSrc}`}}>
      <Link to='/mainpage' onClick={setCurrentProjectToContext}>
        <h2>{projectName}</h2>
        <p>{places}</p>
        <p>{projectMember}</p>
        <p>{projectDate}</p>
      </Link>
      <InviteButton/>
    </div>
  )
}

export default ProjectForm;





