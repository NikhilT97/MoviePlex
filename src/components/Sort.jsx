import React from "react";

export default function Sort({ setSort }) {
  return (
    <select onChange={(e) => setSort(e.target.value)}>
      <option value="title">Sort by Title</option>
      <option value="year">Sort by Year</option>
    </select>
  );
}
