import {React, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../contexts/project.context';
import './project-form.style.scss';
import moment from "moment";

const ProjectForm = (props) => {
  const { project, setRefresh } = props;
  const navigate = useNavigate();
  const {setCurrentProject} = useContext(ProjectContext);

  const handleProjectClick = () => {
    setCurrentProject(project);
    console.log('click project')
    navigate('/mainpage')
  }

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    
    //delete projecct from ProjectList
    {

      
    }

    //change refresh then update projectlist
    setRefresh();
  }

  return(
    <div className="project-form-wrapper"
         // style={{backgroundImage: `url(${placeImgSrc}`}}
    >
      <div className='project-form-link' onClick={handleProjectClick}>
        <div className='project-form-upside'>
          <div className='project-title-place'>
            <h2 className='project-title'>{project.title}</h2>
            <p className='project-places'>{project?.place || 'place'}</p>
          </div>
          <button className='project-delete-btn' onClick={handleDeleteClick}>
            삭제
          </button>
        </div>
        <div className='project-form-downside'>
          <p className='project-date'>{moment(project.startAt).format('YYYY-MM-DD')}</p>
          <div className='project-form-member'>
            <p className='project-member'>{project?.member || ''}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectForm;





