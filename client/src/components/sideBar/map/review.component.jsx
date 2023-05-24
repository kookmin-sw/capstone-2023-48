import ReviewCard from "./reviewCard.component";
import './review.style.css';

const Review = (prop) => {

  const {setReviewVisible, reviews} = prop;  
  
  const handleClick = (event) => {
    event.preventDefault();
  }
  
  return(
    
    <div className="review-container" onClick={handleClick}>
      {reviews.map((review) => (
        <ReviewCard key={review.author_url} review={review}/>
      ))}
    </div>
  )
}

export default Review