import ChattingForm from '../components/chatting/chatting-form.component';
import './main.style.scss';
import Map from '../components/map/map.component';
import { UserContext } from '../contexts/user.context';
import { ProjectContext } from '../contexts/project.context';
import { useContext, useEffect, useState } from 'react';
import axios from "axios";

const defaultMainContent = {
  chattingLog : '',
  places : '',
  member : '',
}

const MainPage = () => {

  const {currentProject} = useContext(ProjectContext);
  const {cureentUser} = useContext(UserContext);
  const [mainContent,setMainContent] = useState(defaultMainContent);
  
  //set main content : chatting log, places, member
  const getMainContent = async () => {
    try{
      const response = await axios.get('/mainContent');
      setMainContent(response.data);
    } catch (error){
      console.log(error);
    }
  }

  
  useEffect(() =>{
    getMainContent();
  },[mainContent]);

  return(
    <div className='main-page-wrapper'>
      <Map/>
      <ChattingForm/>
    </div>
  )
}

export default MainPage;