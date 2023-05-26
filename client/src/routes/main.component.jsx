import './main.style.css';
import ChattingForm from '../components/chatting/chatting-form.component';
import Map from '../components/sideBar/map/map.component';
import Detail from '../components/sideBar/detail/detail.component';
import Member from '../components/sideBar/member/member.component';
import SideBar from '../components/sideBar/sideBar.component';
import React, {useContext, useEffect, useState} from 'react';
import {ProjectContext} from "../contexts/project.context";
import {useParams} from "react-router-dom";
import {getProject, getProjectList} from "../action/project-action";
import {useCookies} from "react-cookie";
import {getUser} from "../action/user-action";
import {UserContext} from "../contexts/user.context";

const MainPage = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  const [refresh, setRefresh] = useState(0);
  const [cookies, setCookies] = useCookies();
  const { setCurrentProject } = useContext(ProjectContext);
  const { setCurrentUser } = useContext(UserContext);
  const { setDisplayUserName } = useContext(UserContext);
  const query = useParams();
  useEffect(() => {
      (async function () {
          if (cookies.w_auth && query.projectId) {
              const response = await getProject(query.projectId);
              const res = await getUser(cookies.user_id);
              setCurrentUser({ email: res.data.id, password: res.data.password });
              setDisplayUserName(res.data.id.substring(0, res.data.id.indexOf("@")));
              if (response.data) {
                  setCurrentProject(response.data);
              }
          }
      })();
  }, [query, refresh])
  const handleActiveComponentChange = (component) => {
    setActiveComponent(component);
  }
  const { currentProject } = useContext(ProjectContext);
  return(
    <div className='main-page-wrapper'>
      <SideBar handleActiveComponentChange={handleActiveComponentChange}/>      
      <Map setRefresh={() => setRefresh(refresh + 1)} setActiveComponent={setActiveComponent} zIndex={activeComponent === 'home' ? 1 : 0 }/>
      <Detail zIndex={activeComponent === 'detail' ? 1 : 0 }/>
      <Member zIndex={activeComponent === 'member' ? 1 : 0 }/>
      { currentProject && <ChattingForm setRefresh={() => setRefresh(refresh + 1)} currentProject={currentProject}/>}
    </div>
  )
}

export default MainPage;