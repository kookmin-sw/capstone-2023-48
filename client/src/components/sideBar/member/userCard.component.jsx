import './userCard.style.css';
import { ProjectContext } from '../../../contexts/project.context';
import React, { useContext,useState,useEffect } from 'react';
import { addMemberToProject } from '../../../action/project-action';
import { getProject, getProjectList } from '../../../action/project-action';

const UserCard = (props) => {

  const { user,project } = props;
  const { currentProject,setCurrentProject } = useContext(ProjectContext);


  const handleInvite = async() => {
    await addMemberToProject(project._id, user.id).then((res) => {
    });
       
    await getProject(project._id).then((res) => {
      setCurrentProject(res.data);
    })
  }

  return(
    <div className="user-card">
      <div className='user-card-name-email'>
        <div className='user-card-name'>{user.name}</div>
        <div className='user-card-email'>{user.email}</div>
      </div>
      {currentProject.member.includes(user.id) ? (
        <button className='user-card-invite-btn' onClick={handleInvite}>
          초대됨
        </button>
      ) : (
        <button className='user-card-invite-btn' onClick={handleInvite}>
          초대
        </button>
      )}
    </div>
  )
}

export default UserCard;
