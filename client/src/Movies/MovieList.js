import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, setMovieList }) {
  console.log(movies)
  return (
    <div className="movie-list">
      
      { movies.map( movie => (
            <MovieCard 
              key={ movie.id }
              movie={ movie } 
              movies={movies}
              setMovieList={ setMovieList } 
            />
        ))}
    </div>
  );
};

export default MovieList;