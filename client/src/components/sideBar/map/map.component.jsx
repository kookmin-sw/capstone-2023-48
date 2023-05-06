import './map.style.scss';
import '../mainContent.style.scss'
import { useState,useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LIBRARIES } from './config'; // 상수 변수 가져오기

const libraries = ['places'];

const Map = () =>{

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 37.609980,
    lng: 127.075017
  };

  const mapOptions = {
    disableDefaultUI: true, // 기본 제어 UI 숨김
    zoomControl: true, // 줌 컨트롤 표시
  };

  const searchBoxRef = useRef(null); 
  const mapRef = useRef(null);
  
  useEffect(() => {
    if (searchBoxRef.current) {
      const searchBox = searchBoxRef.current;
      const map = mapRef.current;
      console.log('map',map);

      // 사용자가 장소를 선택했을 때의 로직을 정의
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        // console.log(places.reviews);
        if (places.length > 0) {
          const place = places[0];
          map.panTo(place.geometry.location);
        }
      });
    }
  }, []);

  const [mapLoaded, setMapLoaded] = useState(false); // 맵 로드 상태 상태 추가

  const handleLoad = () => {
    setMapLoaded(true); // 맵 로드 완료 시 상태 업데이트
    console.log('mount')
  };
  
  const handleUnmount = () => {
    setMapLoaded(false); // 맵 언마운트 시 상태 업데이트
    console.log('unmount')
  };

  // useEffect(() => {
  //   if (!mapLoaded) {
  //     // 맵이 로드되지 않았을 경우에만 로드
  //     const script = document.createElement('script');
  //     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=${libraries.join(',')}`;
  //     script.async = true;
  //     script.defer = true;
  //     script.onload = handleLoad;
  //     document.head.appendChild(script);
  //   }

  //   return () => {
  //     // 컴포넌트 언마운트 시에 스크립트 제거
  //     const scripts = document.getElementsByTagName('script');
  //     for (let i = 0; i < scripts.length; i++) {
  //       if (scripts[i].src.includes('maps.googleapis')) {
  //         scripts[i].remove();
  //         break;
  //       }
  //     }
  //   };
  // }, []);
  
  return(
    <div className='main-content-wrapper'>
      <LoadScript
        googleMapsApiKey= {GOOGLE_MAPS_API_KEY}
        libraries={GOOGLE_MAPS_LIBRARIES}
        onLoad={handleLoad} onUnmount={handleUnmount}
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
    </div>
  )
}

export default Map;