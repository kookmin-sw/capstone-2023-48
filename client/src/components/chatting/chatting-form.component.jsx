import React from 'react';
import './chatting-form.style.css';
import { ProjectContext } from '../../contexts/project.context';
import { useContext,useState,useEffect } from 'react';
import { getUser } from '../../action/user-action';

const ChattingForm = () => {

  const { currentProject } = useContext(ProjectContext)
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    (async function () {
     
      if (currentProject) {
        currentProject.member.map((userId) => {
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
  }, [currentProject]);

  return(
    <div className="chatting-form-wrapper">
      <div className='chatting-header'>        
       {currentProject && currentProject.title}
      </div>
      <div className='chatting-member'>
          {memberList.join(',')}
      </div>
      <div className='chatting-body'>

    
      </div>
    </div>
  )
}

export default ChattingForm;