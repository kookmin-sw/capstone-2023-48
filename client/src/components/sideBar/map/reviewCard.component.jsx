import './reviewCard.style.css';
import React from "react";
const ReviewCard = (prop) => {
  const {review} = prop;

  return(
    <div className="review-card-container">
      <div className="review-card-profile">
        <div className='review-card-profile-img' style={{backgroundImage:`url(${review.profile_photo_url})`}}></div>
        <div className='review-card-profile-name'>{review.author_name}</div>
      </div>
      <div className='review-card-subject'>
        <div>
          {review.relative_time_description}
          {<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100">
            <polygon points="50 3 63 38 100 38 69 59 82 95 50 75 18 95 31 59 0 38 37 38" fill="#FFD700"/>
            </svg>}{review.rating}
        </div>
        {review.text}
      </div>
    </div>
  )
}

export default ReviewCard

