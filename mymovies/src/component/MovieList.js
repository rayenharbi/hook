import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList=({movies})=> {
  return (
   <div className='movie_list'>
      {movies.map( (movie) => <MovieCard movie={movie}/>)}
    </div>

  )
}

export default MovieList