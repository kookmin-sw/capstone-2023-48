const SearchResult = (props) =>{
  const {result} = props;
  console.log('result render');
  return(
    <div className="search-result-container">
      <div>{result.name} resultss</div>
      <div>{result.rating} {result.user_ratings_total}</div>
      <div>{result.vicinity}</div>
      <div></div>
    </div>
  )
}

export default SearchResult;