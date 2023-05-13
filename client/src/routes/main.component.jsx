import './main.style.scss';
import ChattingForm from '../components/chatting/chatting-form.component';
import Map from '../components/sideBar/map/map.component';
import Detail from '../components/sideBar/detail/detail.component';
import Member from '../components/sideBar/member/member.component';
import SideBar from '../components/sideBar/sideBar.component';
import { useState } from 'react';

const MainPage = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  
  const handleActiveComponentChange = (component) => {
    setActiveComponent(component);
  }
  return(
    <div className='main-page-wrapper'>
      <SideBar handleActiveComponentChange={handleActiveComponentChange}/>      
      {activeComponent === 'home' && <Map setActiveComponent={setActiveComponent}/>}
      {activeComponent === 'detail' && <Detail/>}
      {activeComponent === 'member' && <Member/>}
      <ChattingForm/>
    </div>
  )
}

export default MainPage;