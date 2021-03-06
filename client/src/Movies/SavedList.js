import React from 'react';
import { NavLink } from 'react-router-dom';

function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3> Saved Movies: </h3>
      { list.map( movie => {
        console.log(movie, list)
        return (
          <NavLink
            to={ `/movies/${movie.id}` }
            key={ movie.id }
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SavedList;