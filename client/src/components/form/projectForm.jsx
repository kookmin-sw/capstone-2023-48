import {React, useState} from 'react';
import InviteButton from '../button/inviteButton';

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
      <h2>{projectName}</h2>
      <InviteButton/>
    </div>
  )
}

export default ProjectForm;