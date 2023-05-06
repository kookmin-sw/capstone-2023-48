import './map.style.scss';
import '../mainContent.style.scss'
import { useRef, useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LIBRARIES } from './config'; // 상수 변수 가져오기
import SearchResult from './searchResult.component';

const Map = () =>{
  console.log('render');

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const mapOptions = {
    disableDefaultUI: true, // 기본 제어 UI 숨김
    zoomControl: true, // 줌 컨트롤 표시
  };
 
  const searchBoxRef = useRef(null); 
  const mapRef = useRef(null);
  const [results, setResults] = useState();  
  const [ center, setCenter ] = useState({
    lat: 37.609980,
    lng: 127.075017
  })
  const  handlePlacesChange = () => {
    const places = searchBoxRef.current.getPlaces();
    
    if(places){
      const place = places[0];
      setCenter(place.geometry.location) 
      setResults(places);
    }
  }
  
  console.log(results);
  return(
    <div className='main-content-wrapper'>
      <LoadScript
        googleMapsApiKey= {GOOGLE_MAPS_API_KEY}
        libraries={GOOGLE_MAPS_LIBRARIES}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={(map) => { mapRef.current = map; }}
          options={mapOptions}
        >
          <StandaloneSearchBox
            onLoad={(searchBox) => {
              searchBoxRef.current = searchBox;
            }}
            onPlacesChanged={handlePlacesChange}
          >   
            <input
              type="text"
              placeholder="search"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `80%`,
                height: `40px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                marginTop:'2%',
                left: "10%",
            
              }}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </LoadScript>
      <div className='results-side'>
        {results && results.map((result) => {
          console.log('result send');
          <SearchResult key={result.id} result={result}/>
        })}
      </div>
    </div>
  )
}

export default Map;