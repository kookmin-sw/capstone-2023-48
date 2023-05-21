import ReviewCard from "./reviewCard.component";
import './review.style.css';

const Review = (prop) => {

  const {setReviewVisible, reviews} = prop;
  console.log('reviews',reviews);
  
  const handleClose = () => {
    setReviewVisible(false);
  }
  
  return(
    
    <div className="review-container">
      <div className="review-container-close">
        <div className="close" onClick={handleClose}>X</div>
      </div>
      {reviews.map((review) => (
        <ReviewCard key={review.author_url} review={review}/>
      ))}
    </div>
  )
}

export default Review