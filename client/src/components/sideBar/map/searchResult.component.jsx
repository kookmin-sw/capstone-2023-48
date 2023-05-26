import './searchResult.style.css';
import { addPlace } from '../../../action/plan-action';
import { ProjectContext } from '../../../contexts/project.context';
import React, { useContext, useState, useRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import Review from './review.component';

const SearchResult = (props) =>{


  const { result, setActiveComponent, setRefresh } = props;
  const { setCurrentProject, currentProject, setProjectList, projectList } = useContext(ProjectContext);
  const [ toggleImgList, setToggleImgList ] = useState(false);
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ placeDate, setPlaceDate ] = useState(new Date());
  const [ reviewVisible, setReviewVisible ] = useState(false);
  const slideRef = useRef(null);
  const [money, setMoney] = useState();
  const TOTAL_SLIDES = result.photos ? result.photos.length-1 : 0;
  const minDate = currentProject.startAt;
  const maxDate = currentProject.endAt;

  //translate when next/prev button clicked
  //currentSlide가 바뀌면 해당 slide로 translate
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

  //추가버튼을 누르면 해당 장소를 현재 프로젝트의 places에 push
  const handleAddBtnClick = async () => {
    const start = new Date(minDate);
    const end = new Date(maxDate);
    end.setDate(end.getDate() + 1);
    if (placeDate >= start && placeDate <= end) {
      const daysDiff = Math.floor((placeDate - start) / (1000 * 60 * 60 * 24)) + 1;
      await addPlace({
            id: currentProject._id, //현재 프로젝트 id
            name: result.name, //여행지 이름
            address: result.formatted_address, //여행지 주소
            geometry: result.geometry, //여행지 좌표
            photo: result.photos[0].getUrl(),
            day: daysDiff,
            startAt: placeDate,
            money,
          }
      ).then((res) => {
        if (res.data.success) {
          setRefresh();
          setActiveComponent('detail');
        }
        // //업데이트 된 프로젝트 데이터를 res로 받아서 currentProject에 저장
        // console.log(res);
        // setCurrentProject(res.data);
        // //프로젝트 리스트 복사
        // const updatedProjectList = [...projectList];
        //
        // //업데이트할 프로젝트 인덱스 찾기
        // const projectIndex = updatedProjectList.findIndex(
        //     (project) => project._id === currentProject._id
        // );
        // if (projectIndex !== -1) {
        //   // 프로젝트 업데이트
        //   updatedProjectList[projectIndex] = {currentProject};
        //   // projectList 컨텍스트 업데이트
        //   setProjectList(updatedProjectList);
        // }
      })
    } else {
      alert('선택한 날짜가 여행 일정에 포함되어있지 않습니다.')
    }
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

  const handleReviewClick = () => {
    setReviewVisible(!reviewVisible);
  }

  return(
      <div className='result-wrapper'>
        {reviewVisible &&
            <div className='review-wrapper' onClick={handleReviewClick}>
              <Review setReviewVisible={setReviewVisible} reviews={result.reviews}/>
            </div>
        }
        {toggleImgList &&
            <div className='result-img-list' ref={slideRef} onClick={handleImgListCloseBtnClick}>
              {result.photos.map((photo) => {
                const url = photo.getUrl();
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
            <div className='result-rating' onClick={handleReviewClick}>
              {<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100">
                <polygon points="50 3 63 38 100 38 69 59 82 95 50 75 18 95 31 59 0 38 37 38" fill="#FFD700"/>
              </svg>}{result.rating}
              {'  ('}
              {result.user_ratings_total}{")"}
            </div>
            <div className='represent-review' onClick={handleReviewClick}>{result.reviews && result.reviews[0].text.slice(0,50)}{result.reviews && '...'}</div>


          </div>
          <div className='react-time-picker-container'>
            <label>예상 금액</label>
            <input type="number" value={money} onChange={(e) => setMoney(e.target.value)}/>
            <label>날짜 및 시간</label>
            <DatePicker
                placeholderText='날짜와 시간 정하기'
                selected={placeDate}
                onChange={date => setPlaceDate(date)}
                minDate={minDate}
                maxDate={maxDate}
                showTimeSelect
                withPortal
                portalId="root-portal"
                timeIntervals={30}
                timeCaption="시간"
                dateFormat='MM/dd h:mm aa'
                className='react-time-picker'
            />
            <button className='result-add-btn' onClick={handleAddBtnClick}>추가</button>

          </div>
        </div>
      </div>
  )
}

export default SearchResult;