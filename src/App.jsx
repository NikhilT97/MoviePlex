import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import "./App.css";

const API_KEY = "4620a4a2";
const API_URL = "http://www.omdbapi.com/";

function App() {
  const [movies, setMovies] = useState([]);           // ✅ final list shown
  const [allMovies, setAllMovies] = useState([]);     // ✅ raw results from API
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("title");
  const [genre, setGenre] = useState("All");
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [searched, setSearched] = useState(false);


  useEffect(() => {
    async function fetchDefaultMovies() {
      try {
        const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=2023&type=movie`);
        const data = await res.json();

        if (data.Search) {
          const detailedMovies = await Promise.all(
            data.Search.map(async (movie) => {
              const res = await fetch(
                `${API_URL}?apikey=${API_KEY}&i=${movie.imdbID}`
              );
              return res.json();
            })
          );

          const latestMovies = detailedMovies.filter(
            (m) => parseInt(m.Year) >= 2020
          );

          setDefaultMovies(latestMovies);
          console.log("Default Movies:", latestMovies);
        }
      } catch (err) {
        console.error("Error fetching default movies:", err);
      }
    }

    fetchDefaultMovies();
  }, []);

  // ✅ Handle User Search
  const handleSearch = async () => {
    if (!search.trim()) return;
    setSearched(true);

    try {
      const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}&type=movie`);
      const data = await res.json();

      if (data.Search) {
        const detailedMovies = await Promise.all(
          data.Search.map(async (movie) => {
            const res = await fetch(
              `${API_URL}?apikey=${API_KEY}&i=${movie.imdbID}`
            );
            return res.json();
          })
        );

        setAllMovies(detailedMovies);  // ✅ keep raw movies
      } else {
        setAllMovies([]);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setAllMovies([]);
    }
  };

  // ✅ Apply sorting + filtering whenever allMovies, sort, or genre changes
  useEffect(() => {
    let results = [...allMovies];

    // Filter by genre
    if (genre !== "All") {
      results = results.filter((m) =>
        m.Genre?.toLowerCase().includes(genre.toLowerCase())
      );
    }

    // Sorting
    if (sort === "title") {
      results.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sort === "year") {
      results.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    setMovies(results);
  }, [allMovies, sort, genre]);

  return (
    <div className="app">
      
      <h1>   MoviePlex App</h1>
      <h2> <span>🎬</span> Your Gateway to Movies</h2>
      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <Sort setSort={setSort} />
        <Filter setGenre={setGenre} />
      </div>

      {/* ✅ Show default movies before search */}
      {!searched && defaultMovies.length > 0 && (
        <>
          <h2 className="section-title">Latest Movies (2020 & Newer)</h2>
          <MovieList movies={defaultMovies} />
        </>
      )}

      {/* ✅ Show search results after search */}
      {searched && (
        movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p className="no-results">No movies found</p>
        )
      )}

      <Footer />
    </div>
  );
}

export default App;
