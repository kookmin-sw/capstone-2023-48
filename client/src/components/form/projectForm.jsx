import {React, useState} from 'react';
import InviteButton from '../button/inviteButton';
import { Link } from 'react-router-dom';

const defaultProjectData = {
  projectName: 'DEFAULT PROJECT NAME',
  places : '',
  placeImgSrc : '',
  projectMember : '',
  projectDate : '',
}

const ProjectForm = () => {

  const [projectData, setProjectData] = useState(defaultProjectData);
  const {projectName,places,placeImgSrc,projectMember,projectDate} = projectData;

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





