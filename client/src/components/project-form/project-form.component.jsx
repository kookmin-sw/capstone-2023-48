import {React} from 'react';
import InviteButton from '../button/invite-button.component';
import { Link } from 'react-router-dom';

const ProjectForm = (project) => {
  const {
    projectName, 
    places,
    placeImgSrc,
    projectMember,
    projectDate
  } = project;
  

  return(
    <div className="project">
      <Link to='/mainpage'>
        <h2>{projectName}</h2>
      </Link>
      <InviteButton/>
    </div>
  )
}

export default ProjectForm;





