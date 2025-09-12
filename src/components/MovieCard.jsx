import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
    </div>
  );
}
