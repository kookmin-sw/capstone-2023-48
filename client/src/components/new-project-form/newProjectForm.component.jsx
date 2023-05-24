import './newProjectForm.style.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, {useState, useContext} from "react";
import { UserContext } from '../../contexts/user.context';

import {createProject} from "../../action/project-action";
import {useCookies} from "react-cookie";

//form for add new project to projectlist
const NewProjectForm = ({onClose, setRefresh}) =>{
  const [cookies, setCookies] = useCookies();
  const [projectTitle, setProjectTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  //post userId by current user (ex. 1234@naver.com)
  const {currentUser} = useContext(UserContext);

  const handleTitleChange = (e) => {
    const {value} = e.target;
    setProjectTitle(value);
  }

  //post new project data then receive project data to add projectList context
  const handleNewProjectSubmit = async () => {
    await createProject({
      title: projectTitle,
      startAt: startDate.getTime(),
      endAt: endDate.getTime(),
      userId: cookies.user_id,
      displayName: currentUser.email.slice(0,currentUser.email.indexOf('@')),
      days: endDate.getDate() - startDate.getDate(),
    }).then((res) => {
      setRefresh();
    }).catch((error) => {
      console.log(error);
      console.log(projectTitle,startDate,endDate,currentUser);
    });
    onClose();
  }

  return(
    <div className='new-project-form-wrapper'>
      <div className='new-project-form'>
        
        <button className='exit-btn' onClick={onClose}>X</button>
        <h1>새로운 프로젝트</h1>
        <input placeholder='프로젝트 제목' type='text' name='projectTitle' onChange={handleTitleChange} required/>
        <div className='date-picker'>
          <DatePicker
            className='date-picker-input'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            selectsStart
            readOnly={false}
            placeholderText='시작일'
            />
          <DatePicker
            className='date-picker-input'
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            endDate
            readOnly={false}
            placeholderText='종료일'
            />
        </div>
        <button type="button" className='new-project-submit-btn' onClick={handleNewProjectSubmit}>새 프로젝트 생성</button>
     </div>
   </div>
  )
}

export default NewProjectForm