import React from "react";
import { actors } from "../data";

function Actors() {
  return ( 
  <div>
    <h1>Actors Page</h1>
    {actors.map((actor, Id) => (
        <div key={Id}>
          <h2>Name: {actor.name}</h2>
          <ul>
            {actor.movies.map((movie, movieId) => (
              <li key={movieId}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Actors;