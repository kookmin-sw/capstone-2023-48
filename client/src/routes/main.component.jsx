import ChattingForm from '../components/chatting/chatting-form.component';
import './main.style.scss';
import Map from '../components/map/map.component';
import { UserContext } from '../contexts/user.context';
import { ProjectContext } from '../contexts/project.context';
import { useContext } from 'react';

const MainPage = () => {

  const {currentProject} = useContext(ProjectContext);
  const {cureentUser} = useContext(UserContext);

  console.log(currentProject);

  return(
    <div className='main-page-wrapper'>
      <Map/>
      <ChattingForm/>
    </div>
  )
}

export default MainPage;