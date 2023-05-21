import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../contexts/project.context';
import './project-form.style.css';
import moment from "moment";
import { UserContext } from '../../contexts/user.context'

const ProjectForm = (props) => {
  const { project, setRefresh } = props;
  const navigate = useNavigate();
  const { setCurrentProject } = useContext(ProjectContext);
  const { currentUser } = useContext(UserContext);

  const handleProjectClick = () => {
    setCurrentProject(project);
    navigate('/mainpage')
  }

  const handleDeleteClick = (event) => {
    event.stopPropagation();

    //change refresh then update projectlist
    setRefresh();
  }

  return(
    <div className="project-form-wrapper">
      <div className='project-form-link' onClick={handleProjectClick}>
        <div className='project-form-upside'>
          <p className='project-place'>{project.place || '서울특별시'}</p>
          {currentUser.email === project.owner &&
            <button className='project-delete-btn' onClick={handleDeleteClick}>
              삭제
            </button>
          }
        </div>
        <div className='project-form-downside'>
          <p className='project-date'>{moment(project.startAt).format('YYYY-MM-DD')}</p>
          <div className='project-form-member'>
            <p className='project-member'>{project.member || 'user1.user2'}</p>
          </div>
        </div>
      </div>
      <div className='project-title-container'>
        <h2 className='project-title'>{project.title}</h2>
      </div>
    </div>
  )
}
export default ProjectForm;
