import './searchResult.style.scss';
import { addPlace } from '../../../action/plan-action';
import { ProjectContext } from '../../../contexts/project.context';
import { useContext, useState, useRef, useEffect } from 'react';

const SearchResult = (props) =>{
  
  const { result } = props;
  const { setCurrentProject } = useContext(ProjectContext);
  const [ toggleImgList, setToggleImgList ] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = result.photos.length-1;

  useEffect(() => {
    if(slideRef.current){
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(calc(-${currentSlide} * 600px))`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    }
  },[currentSlide])

  //toggle img list isVisible when img clicked
  const handleImgClick = () => {
    setToggleImgList(!toggleImgList);
  }

  //add place to plan
  const handleAddBtnClick = async () => {
    await addPlace(
      result.name,
      result.formatted_address,
      result.geometry,
      result.photos,
    ).then((res) => {
      //res is project data
      setCurrentProject(res.data);
    })
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
            return(
              <div className='result-img-list-item' key={photo.id}style={{ backgroundImage: `url(${photo.getUrl()})`}}/>
            )
          })}
        </div>
      }
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