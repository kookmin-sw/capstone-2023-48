import './main.style.css';
import ChattingForm from '../components/chatting/chatting-form.component';
import Map from '../components/sideBar/map/map.component';
import Detail from '../components/sideBar/detail/detail.component';
import Member from '../components/sideBar/member/member.component';
import SideBar from '../components/sideBar/sideBar.component';
import React, { useState } from 'react';
const MainPage = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  
  const handleActiveComponentChange = (component) => {
    setActiveComponent(component);
  }
  return(
    <div className='main-page-wrapper'>
      <SideBar handleActiveComponentChange={handleActiveComponentChange}/>      
      <Map setActiveComponent={setActiveComponent} zIndex={activeComponent === 'home' ? 1 : 0 }/>
      <Detail zIndex={activeComponent === 'detail' ? 1 : 0 }/>
      <Member zIndex={activeComponent === 'member' ? 1 : 0 }/>
      <ChattingForm/>
    </div>
  )
}

export default MainPage;