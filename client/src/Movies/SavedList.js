import React from 'react';
import { NavLink } from 'react-router-dom';

function SavedList({ list }) {
  return (
    <div>
      <h3> Saved Movies: </h3>
      { list.map( movie => {
        return (
          <NavLink
            to={ `/movies/${movie.id}` }
            key={ movie.id }
          >
            <h3>{ movie.title }</h3>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SavedList;