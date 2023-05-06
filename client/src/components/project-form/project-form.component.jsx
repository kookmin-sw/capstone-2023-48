import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../contexts/project.context';
import './project-form.style.scss';
import moment from "moment";

const ProjectForm = (props) => {
  const { project } = props;

  const {setCurrentProject} = useContext(ProjectContext);
  const setCurrentProjectToContext = () => setCurrentProject(project);
  return(
    <div className="project-form-wrapper"
         // style={{backgroundImage: `url(${placeImgSrc}`}}
    >
      <Link to='/mainpage' className='project-form-link' onClick={setCurrentProjectToContext}>
        <div className='project-form-upside'>
          <h2 className='project-name'>{project.title}</h2>
          <p className='project-places'>{project?.place || ''}</p>
        </div>
        <div className='project-form-downside'>
          <p className='project-date'>{moment(project.startAt).format('YYYY-MM-DD')}</p>
          <div className='project-form-member'>
            <p className='project-member'>{project?.member || ''}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectForm;





