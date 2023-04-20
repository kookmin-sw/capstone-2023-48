import ChattingForm from '../components/chatting/chatting-form.component';
import './main.style.scss';
import Map from '../components/map/map.component';
const MainPage = () => {
  return(
    <div className='main-page-wrapper'>
      <Map/>
      <ChattingForm/>
    </div>
  )
}

export default MainPage;