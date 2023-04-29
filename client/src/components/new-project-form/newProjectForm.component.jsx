import './newProjectForm.style.scss';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {useState, useContext} from "react";
import { UserContext } from '../../contexts/user.context';
import axios from 'axios';

//form for add new project to projectlist
const NewProjectForm = ({onClose}) =>{

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [member, setMember] = useState('');

  //post userId by current user (ex. 1234@naver.com)
  const {currentUser} = useContext(UserContext);

  const handleNewProjectSubmit = async () => {
    try {
      const response = await axios.post('/newData', {
        title: title,
        start_date: startDate,
        end_date: endDate,
        member: member,
        userId: currentUser        
      });
      console.log(response.data);
    } catch (error) {
      console.log(title,startDate,endDate,member,currentUser);
      console.error(error);
    }
  }

  return(
    //new-project-form style place in sign-in-form.style.scss , share style with sign-in/sign-up
    <div className='new-project-form-wrapper'>
      <form className='new-project-form'> 
        <label>
          프로젝트 제목
          <button onClick={onClose}>X</button>
        </label>
        <input type='text' name='project-title' required/>
        <div className='date-picker'>
          <label htmlFor="start-date">시작일:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            selectsStart
          />
          <label htmlFor="end-date">종료일:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            endDate
          />
        </div>
        <button type='submit' className='new-project-submit' onClick={handleNewProjectSubmit}>새 프로젝트 생성</button>
     </form>
   </div>
  )
}

export default NewProjectForm