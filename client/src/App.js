import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';
import AddMovie from './Movies/AddMovie';
import axios from 'axios';

const App = () => {
  const [ savedList, setSavedList ] = useState( [] );
  const [ movieList, setMovieList ] = useState( [] );

  const getMovieList = () => {
    axios
      .get( "http://localhost:5000/api/movies" )
      .then( response => setMovieList( response.data ))
      .catch( error => console.log( error.response ));
  };

  const addToSavedList = movie => {
    setSavedList([ ...savedList, movie ]);
  };

  useEffect(() => {
    getMovieList();
  }, [movieList] );

  return (
    <>
      <SavedList list={ savedList } />
        
      <div> 
        <Link to="/">
          <button>
            Home Page
          </button>
        </Link>
        <Link to="/add-movie">
          <button>
            Add Movie
          </button>
        </Link>
      </div>

      <Route exact path="/">
        <MovieList 
          movies={ movieList } 
          addToSavedList={ addToSavedList } 
          setMovieList={ setMovieList }
        />
      </Route>


      <Route path="/movies/:id">
        <Movie 
          addToSavedList={ addToSavedList } 
          setMovieList={ setMovieList } 
          movies={ movieList }
        />
      </Route>

      <Route path='/update-movie/:id'>
        <UpdateMovie 
          movies={ movieList } 
          setMovieList={ setMovieList }
        />
      </Route>

      <Route path='/add-movie'>
        <AddMovie />
      </Route>
    </>
  );
};

export default App;