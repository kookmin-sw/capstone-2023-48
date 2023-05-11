import './searchResult.style.scss';
import { addPlace } from '../../../action/plan-action';
import { ProjectContext } from '../../../contexts/project.context';
import { useContext, useState, useRef, useEffect } from 'react';

const SearchResult = (props) =>{
  
  const { result, setActiveComponent } = props;
  const { setCurrentProject, currentProject, setProjectList, projectList } = useContext(ProjectContext);
  const [ toggleImgList, setToggleImgList ] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = result.photos ? result.photos.length-1 : 0;
  //translate when next/prev button clicked
  useEffect(() => {
    if(slideRef.current){
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(calc(-${currentSlide} * 600px))`;
    }
  },[currentSlide])

  //toggle img list isVisible when img clicked
  const handleImgClick = () => {
    setToggleImgList(!toggleImgList);
    setCurrentSlide(0);
  }

  //add place to plan
  const handleAddBtnClick = async () => {
    setActiveComponent('detail');
    await addPlace(
      result.name, //여행지 이름
      result.formatted_address, //여행지 주소
      result.geometry, //여행지 좌표
      result.photos, // 여행지 사진 Array (최대 length : 10)
    ).then((res) => {
      
      //res 프로젝트 업데이트 된 프로젝트 데이터 받기

      //  project{
        // endAt : 
        // owner :
        // startAt :
        // title :
        // places : [place1,place2,place2...]
      //}


      //  places
      // {
      //   'place_title':'여행지 이름'
      //   'formatted_address':여행지 주소'
      //   'geometry':'여행지 좌표'
      //   'photos' : '여행지 사진 Array (최대 length : 10)'
      //   'startAt' : '여행지 일정 시작시간'
      //   'endAt' : '여행지 일정 죵료시간'
      // }

      setCurrentProject(res.data);
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
  }

  const handleImgListCloseBtnClick = () => {
    setToggleImgList(false);
  }

  const handlePrevBtnClick = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }  
  }
  
  const handleNextBtnClick = () => {
    if (currentSlide === TOTAL_SLIDES) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return(
    <div className='result-wrapper'>
      {toggleImgList && 
        // <ResultImgList key={result.photos.id} photos={result.photos} ref={slideRef}/>
        <div className='result-img-list' ref={slideRef}>
          {result.photos.map((photo) => {
            const url = photo.getUrl()
            return(
              <div className='result-img-list-item' key={url} style={{ backgroundImage: `url(${url})`}}/>
              )
            })}
        </div>
      }
      {toggleImgList && <div className='result-img-list-close-btn' onClick={handleImgListCloseBtnClick}>X</div>}
      {toggleImgList &&
        <button 
          className='result-img-list-prev-btn'
          onClick={handlePrevBtnClick}
          >&lt;</button> 
        }
      {toggleImgList && 
        <button className='result-img-list-next-btn'
          onClick={handleNextBtnClick}
        >&gt;
        </button>  
      }
      <div className="result-container">
        <div className='result-img-wrapper'>
          { result.photos && 
          <div className='result-img' 
            style={{ backgroundImage: `url(${result.photos[0].getUrl()})`}}
            onClick={handleImgClick}
          >
          +{result.photos.length}
          </div>
          }
          { !result.photos && <div className='result-img'></div> }
          
        </div>
        <div className='result-name-address-rating-wrapper'>
          <div className='result-name'>{result.name}</div>
          <div className='result-address'>{result.formatted_address}</div>
          <div className='result-rating'>{result.rating} {result.user_ratings_total}</div>
        </div>
        <div className='result-add-btn-wrapper'>
          <button className='result-add-btn' onClick={handleAddBtnClick}>추가</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;