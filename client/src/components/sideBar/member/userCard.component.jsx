import './userCard.style.css';
import { ProjectContext } from '../../../contexts/project.context';
import React, { useContext } from 'react';
import { addMemberToProject } from '../../../action/project-action';

const UserCard = (props) => {

  const { user } = props;
  const { currentProject,setCurrentProject,projectList,setProjectList } = useContext(ProjectContext);

  //invite버튼 누르면 현재 프로젝트의 member에 해당 user push.
  //유저의 이메일, 현재 프로젝트_id args로 보냄
  const handleInvite = async() => {
    console.log(currentProject);
    await addMemberToProject(currentProject._id, user.id).then((res) => {
      //업데이트 된 프로젝트 데이터를 res로 받아서 currentProject에 저장
      setCurrentProject(res.data);

      //프로젝트 리스트 복사
      const updatedProjectList = [...projectList];

      //업데이트할 프로젝트 인덱스 찾기
      const projectIndex = updatedProjectList.findIndex(
        (project) => project._id === currentProject._id
      );
      if (projectIndex !== -1) {
        // 프로젝트 업데이트
        updatedProjectList[projectIndex] = {currentProject};
        // projectList 컨텍스트 업데이트
        setProjectList(updatedProjectList);
      }
    });
  }

  return(
    <div className="user-card">
      <div className='user-card-name-email'>
        <div className='user-card-name'>{user.name}</div>
        <div className='user-card-email'>{user.email}</div>
      </div>
      {!currentProject.member.includes(user._id) && 
        <button className='user-card-invite-btn' onClick={handleInvite}>초대</button>
      }
    </div>
  )
}

export default UserCard;
