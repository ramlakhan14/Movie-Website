import  React from 'react';
import {data} from '../data';

class MovieCard extends React.Component{
  render(){
    const {movie} =this.props;
    return(
      <div className='movie-card'>
      <div className='left'>
      <img alt='movie-poster' src={movie.Poster}/>
      </div>
      <div className='right'>
      <div className='title'>{movie.Title}</div>
      <div className='plot'>{movie.Plot}</div>
      <div className='footer'>
      <div className='rating'>{movie.imdbRating}</div>
      <button className='favorite-btn'>Favourite</button>
      </div>
      </div>
      </div>
    );
  }
}

export default MovieCard;