import React from "react";

export default function Filter({ setGenre }) {
  return (
    <select onChange={(e) => setGenre(e.target.value)}>
      <option value="All">All Genres</option>
      <option value="Action">Action</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Thriller">Thriller</option>
      <option value="Crime">Crime</option>
    </select>
  );
}
