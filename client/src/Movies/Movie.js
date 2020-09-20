import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList, setMovieList, movies }) {
  const [ movie, setMovie ] = useState( null );
  const params = useParams();

  const fetchMovie = id => {
    axios
      .get( `http://localhost:5000/api/movies/${id}`)
      .then( response => setMovie( response.data ))
      .catch( error => console.log( error.response ));
  };

  const saveMovie = event => {
    event.stopPropagation()
    addToSavedList( movie) ;
  };

  useEffect( () => {
    fetchMovie( params.id );
  }, [ params.id ]);

  if ( !movie ) {
    return <div>Loading movie information...</div>;
  };

  return (
    <div className="save-wrapper">
      <MovieCard 
        movie={ movie } 
        movies={movies}
        saveMovie={ saveMovie } 
        setMovieList={ setMovieList }
      />
    </div>
  );
};

export default Movie;