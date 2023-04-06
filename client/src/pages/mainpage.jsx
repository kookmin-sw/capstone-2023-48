import MainProjectForm from '../components/form/mainProjectForm';
import ChattingForm from '../components/form/chattingForm';

const MainPage = () => {
  return(
    <div className='main_page_wrapper'>
      <MainProjectForm/>
      <ChattingForm/>
    </div>
  )
}

export default MainPage;