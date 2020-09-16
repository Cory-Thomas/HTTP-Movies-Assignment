import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const MovieCard = ({ movie, movies, saveMovie, setMovieList }) => {
  const history = useHistory();

  const navigateToMovie = () => {
    history.push( `/movies/${movie.id}` );
  };

  const clickEdit = event => {
    event.stopPropagation();
    history.push( `/update-movie/${movie.id}` );
  };

  const handleDelete = event => {
    event.preventDefault();
    axios
      .delete( `http://localhost:5000/api/movies/${movie.id}` )
      .then( response => {
        console.log(response.data, movie)
        setMovieList([ ...movies, response.data ]);
        history.push( '/' );
      })
      .catch( error => console.log(error));
  };

  return (
    <div className="movie-card" onClick={navigateToMovie}>
      <h2>{ movie.title }</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{ movie.metascore }</strong>
      </div>
      <h3>Actors</h3>

      
      <div>
        <button onClick={ clickEdit }>
          Edit
        </button>
        <button onClick={ saveMovie }>
          Save
        </button>
        <button onClick={ handleDelete }>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;