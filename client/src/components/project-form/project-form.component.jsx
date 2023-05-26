import React, {useContext,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../contexts/project.context';
import './project-form.style.css';
import moment from "moment";
import { UserContext } from '../../contexts/user.context'
// import { getUser } from '../../action/user-action';

const ProjectForm = (props) => {
  const navigate = useNavigate();
  const { setCurrentProject } = useContext(ProjectContext);
  const { currentUser } = useContext(UserContext);
  const { project, setRefresh } = props;
  const [memberList, setMemberList] = useState([]);
  const [ownerEmail, setOwnerEmail] = useState();
  
  useEffect(() => {
    (async function () {
      if (project) {
        // await getUser(project?.owner).then((response)=> {
        //   setOwnerEmail(response.data.id);
        // });
      }
    })();
  }, [project]);

  const handleProjectClick = () => {
    setCurrentProject(project);
    navigate(`/mainpage/${project._id}`);
  }

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    //change refresh then update projectlist
    setRefresh();
  }
  return(
    <div className="project-form-wrapper">
      <div className='project-form-link' onClick={handleProjectClick} style={{ backgroundImage: `url(${project.plan[0]?.thumbnail})`}}>
        <div className='project-form-upside'>
          <p className='project-place'>{project && project.plan[0].address.split(' ')[1] || project.title}</p>
          {currentUser && currentUser.email && currentUser.email === ownerEmail &&
            <div className='project-delete-btn' onClick={handleDeleteClick}>
              X
            </div>
          }
        </div>
        <div className='project-form-downside'>
          <p className='project-date'>{moment(project.startAt).format('YYYY-MM-DD')}</p>
          <div className='project-form-member'>
            <p className='project-member'>
            {ownerEmail && ownerEmail.slice(0, ownerEmail.indexOf('@'))}
            </p>
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





