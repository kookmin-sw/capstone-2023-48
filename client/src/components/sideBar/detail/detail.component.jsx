import '../mainContent.style.scss';
import './detail.style.scss';
import update from 'immutability-helper'
import { updatePlaces } from '../../../action/project-action';
import { useContext } from 'react';
import { ProjectContext } from '../../../contexts/project.context';
import { useCallback, useState } from 'react'
import PlaceCard from './placeCard';
import { DragDropContext } from 'react-beautiful-dnd';

//place의 테스트 데이터
const test_place1 = {
  'id':'1',
  'project_id':'currentProject._id',
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
  'project_id':'currentProject._id',
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
  'project_id':'currentProject._id',
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
  'project_id':'currentProject._id',
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
  'project_id':'currentProject._id',
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
  'project_id':'currentProject._id',
  'place_title':'여행지 이름',
  'formatted_address':'여행지 주소',
  'geometry':'여행지 좌표',
  'thumbnail' : '여행지 사진 photos[0]',
  'startAt' : '여행지 일정 시작시간',
  'endAt' : '여행지 일정 죵료시간',
  'index' : '일정 index'
}

//currentProject의 테스트 데이터
const currentProject = {
        _id : '',
        endAt : '',
        owner : '',
        member : ['use1','user2','user3'],
        startAt : '',
        title : 'test_project_data',
        places : [test_place1,test_place2,test_place3,test_place4,test_place5,test_place6],
}


const Detail = (props) =>{

  // const { currentProject } = useContext(ProjectContext); <= 실제 사용할 코드
  const { setCurrentProject,projectList,setProjectList } = useContext(ProjectContext);
  const [places, setPlaces] = useState(currentProject.places); //초기값 테스트 데이터 넣음
  

  //일정 순서가 바뀌면 프로젝트 데이터를 update
  useState(async()=>{
    await updatePlaces(currentProject._id,places).then((res) => {
      //업데이트 된 프로젝트 데이터를 res로 받아서 currentProject에 저장
      setCurrentProject(res.data);

      //프로젝트 리스트 복사
      const updatedProjectList = [...projectList];
      
      //업데이트할 프로젝트 인덱스 찾기
      const projectIndex = updatedProjectList.findIndex(
        (project) => project._id === currentProject._id
      );
      if (projectIndex !== -1) {
        // 프로젝트 업데이트
        updatedProjectList[projectIndex] = {currentProject};
        // projectList 컨텍스트 업데이트
        setProjectList(updatedProjectList);
      }
    })
  },[places]);

  //카드를 다른 위치에 drag drop했을때
  //places state가 변경됨.
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