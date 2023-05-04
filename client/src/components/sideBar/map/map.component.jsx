import './map.style.scss';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'


const Map = () =>{

  const navermaps = useNavermaps();
  const input = document.createElement('input');
  const searchBox = new navermaps.places.SearchBox(input);
  
  

  return(
    <div className='main-content-wrapper'>
      <MapDiv className='' style={{width: '100%',height: '100%',}}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
          defaultZoom={15}
        >
        <Marker
          defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
        />
        </NaverMap>
      </MapDiv>
    </div>
  )
}

export default Map;