import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, Id) => (
        <div key={Id}>
          <h2>Name: {director.name}</h2>
          <ul>
            {director.movies.map((movie, movieId) => (
              <li key={movieId}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;