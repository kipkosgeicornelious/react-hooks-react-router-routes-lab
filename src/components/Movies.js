import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, Id) => (
        <div key={Id}>
          <h2>Title: {movie.title}</h2>
          <p>Time: {movie.time} minutes</p>
          <ul>
            {movie.genres.map((genre, genreId) => (
              <li key={genreId}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;