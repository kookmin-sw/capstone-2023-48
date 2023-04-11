import MainProjectForm from '../components/form/mainProjectForm';
import ChattingForm from '../components/form/chattingForm';
import '../assets/styles/mainpage.style.scss';
import Navigation from '../components/navigation/navigation';

const MainPage = () => {
  return(
    <div className='main-page-wrapper'>
      <Navigation/>
      <MainProjectForm/>
      <ChattingForm/>
    </div>
  )
}

export default MainPage;