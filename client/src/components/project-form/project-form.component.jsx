import React, {useContext,useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../contexts/project.context';
import './project-form.style.css';
import moment from "moment";
import { UserContext } from '../../contexts/user.context'
import { getUser } from '../../action/user-action';

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
        await getUser(project?.owner).then((response)=>{
          setOwnerEmail(response.data.id);
          
        }); 

        project.member.map((userId) => {
          (async function(){
            await getUser(userId).then((response) => {
              const member = response.data.id.slice(0,response.data.id.indexOf('@'));
              if(!memberList.includes(member)){
                setMemberList([...memberList,member]);
              }
            })
          })();
        })
      }
    })();
  }, [project]);
  
  const handleProjectClick = () => {
    setCurrentProject(project);
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


  // {project?.member.map((userId) => {
  //   getUser(userId).then((response) => {
  //     setMemberList([...memberList,response.data.id.slice(0,response.data.id.indexOf('@'))])
  //   })
  // })}

  return(
    <div className="project-form-wrapper"
    >
      <div className='project-form-link' onClick={handleProjectClick}>
        <div className='project-form-upside'>
          <p className='project-place'>{project?.place || '서울특별시'}</p>
          {currentUser?.email === ownerEmail && 
            <div className='project-delete-btn' onClick={handleDeleteClick}>
              X
            </div>
          }
        </div>
        <div className='project-form-downside'>
          <p className='project-date'>{moment(project.startAt).format('YYYY-MM-DD')}</p>
          <div className='project-form-member'>
            <p className='project-member'>
            {memberList.join(' ')}
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