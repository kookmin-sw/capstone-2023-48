import './map.style.scss';
import axios from 'axios';
const Map = () =>{
  
  const response = axios.get('https://naveropenapi.apigw.ntruss.com/map-static/v2/raster');
  console.log(response);

  return(
    <div className='map-wrapper'>
      map
    </div>
  )
}

export default Map;