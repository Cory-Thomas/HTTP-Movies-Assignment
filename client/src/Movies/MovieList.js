import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, setMovieList }) {
  console.log(movies)
  return (
    <div>
      
      { movies.map( movie => (
            <MovieCard 
              key={ movie.id }
              movie={ movie } 
              setMovieList={ setMovieList } 
            />
        ))}
    </div>
  );
};

export default MovieList;