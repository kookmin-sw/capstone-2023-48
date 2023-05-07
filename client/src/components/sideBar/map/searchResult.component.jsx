import './searchResult.style.scss';
import { useState } from 'react';
import { addPlace } from '../../../action/plan-action';

const SearchResult = (props) =>{
  const {result} = props;
  console.log(result);

  //add place to plan
  const handleClick = async () => {
    await addPlace(
      result.name,
      result.formatted_address,
      result.geometry,
      result.photos,
    )
  }

  return(
    <div className='result-wrapper'>
      <div className="result-container">
        <div className='result-img-wrapper'>
          { result.photos && <div className='result-img' style={{ 
            backgroundImage: `url(${result.photos[0].getUrl()})` 
            }}>
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
          <button className='result-add-btn' onClick={handleClick}>추가</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;