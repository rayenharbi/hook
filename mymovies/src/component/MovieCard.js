import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from "react-router-dom";
const MovieCard = ({movie}) => {
  return (
    <div>
      <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={movie.posterUrl} alt='ay hkeya'/>
      
      <h1>{movie.title}</h1>
      <Link to={`/movies/${movie.id}/description`}> View Details</Link>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
         
        /> <br/>
      <span className="minutes">{movie.duration}</span>
      <p className="type">{movie.genre}</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        {movie.description}
      </p>
    </div>
   
  </div>
  <div className="blur_back "></div>
</div>
</div>
  )
}

export default MovieCard