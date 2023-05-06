import './main.style.scss';
import ChattingForm from '../components/chatting/chatting-form.component';
import Map from '../components/sideBar/map/map.component';
import Detail from '../components/sideBar/detail/detail.component';
import Member from '../components/sideBar/member/member.component';
import SideBar from '../components/sideBar/sideBar.component';
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
  const [activeComponent, setActiveComponent] = useState('home');

  const handleActiveComponentChange = (component) => {
    setActiveComponent(component);
  }
  return(
    <div className='main-page-wrapper'>
      <SideBar handleActiveComponentChange={handleActiveComponentChange}/>
      {/*{activeComponent === 'home' && <Map/>}*/}
      {activeComponent === 'detail' && <Detail/>}
      {activeComponent === 'member' && <Member/>}
      <ChattingForm/>
    </div>
  )
}

export default MainPage;