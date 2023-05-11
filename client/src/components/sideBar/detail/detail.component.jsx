import '../mainContent.style.scss';
import './detail.style.scss';
import update from 'immutability-helper'

import { useContext } from 'react';
import { ProjectContext } from '../../../contexts/project.context';
import { useCallback, useState } from 'react'
import PlaceCard from './placeCard';
import { DragDropContext } from 'react-beautiful-dnd';

const test_place1 = {
  'id':'1',
  'place_title':'여행지 이름',
  'formatted_address':'여행지 주소',
  'geometry':'여행지 좌표',
  'photos' : '여행지 사진 Array (최대 length : 10)',
  'startAt' : '여행지 일정 시작시간',
  'endAt' : '여행지 일정 죵료시간',
  'index' : '일정 index'
}
const test_place2 = {
  'id':'2',
  'place_title':'여행지 이름',
  'formatted_address':'여행지 주소',
  'geometry':'여행지 좌표',
  'photos' : '여행지 사진 Array (최대 length : 10)',
  'startAt' : '여행지 일정 시작시간',
  'endAt' : '여행지 일정 죵료시간',
  'index' : '일정 index'
}
const test_place3 = {
  'id':'3',
  'place_title':'여행지 이름',
  'formatted_address':'여행지 주소',
  'geometry':'여행지 좌표',
  'thumbnail' : '여행지 사진 photos[0]',
  'startAt' : '여행지 일정 시작시간',
  'endAt' : '여행지 일정 죵료시간',
  'index' : '일정 index'
}
const test_place4 = {
  'id':'4',
  'place_title':'여행지 이름',
  'formatted_address':'여행지 주소',
  'geometry':'여행지 좌표',
  'thumbnail' : '여행지 사진 photos[0]',
  'startAt' : '여행지 일정 시작시간',
  'endAt' : '여행지 일정 죵료시간',
  'index' : '일정 index'
}
const test_place5 = {
  'id':'5',
  'place_title':'여행지 이름',
  'formatted_address':'여행지 주소',
  'geometry':'여행지 좌표',
  'thumbnail' : '여행지 사진 photos[0]',
  'startAt' : '여행지 일정 시작시간',
  'endAt' : '여행지 일정 죵료시간',
  'index' : '일정 index'
}
const test_place6 = {
  'id':'6',
  'place_title':'여행지 이름',
  'formatted_address':'여행지 주소',
  'geometry':'여행지 좌표',
  'thumbnail' : '여행지 사진 photos[0]',
  'startAt' : '여행지 일정 시작시간',
  'endAt' : '여행지 일정 죵료시간',
  'index' : '일정 index'
}

const currentProject = {
  places:[test_place1,test_place2,test_place3,test_place4,test_place5,test_place6]
}


const Detail = (props) =>{

  // const { currentProject } = useContext(ProjectContext);
  const [places, setPlaces] = useState(currentProject.places);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setPlaces((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])

  const renderCard = useCallback((place, index) => {
    return (
      <PlaceCard
        key={place.id}
        index={index}
        id={place.id}
        text={place.place_title}
        thumbnail={place.thumbnail}
        city={place.city}
        moveCard={moveCard}
      />
    )
  }, [])

  return(
    <div className='main-content-wrapper'>
      <div className='detail-plan-wrapper'>
        <div className='detail-plan-column'>
          {places.map((place,index) => (    
            renderCard(place,index)
            ))}
        </div>
      </div>
    </div>
  )
}
export default Detail;