import ChattingForm from '../components/chatting/chatting-form.component';
import './main.style.scss';
import Navigation from '../components/navigation/navigation.component';
import Map from '../components/map/map.component';
const MainPage = () => {
  return(
    <div className='main-page-wrapper'>
      <Navigation/>
      <Map/>
      <ChattingForm/>
    </div>
  )
}

export default MainPage;