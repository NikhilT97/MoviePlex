 
<h1> MoviesPlex </h1> 
A simple Movies App that allows users to view a list of movies, search, filter by categories, and sort by title or release year. The app uses HTML, CSS, JavaScript, and JSON data for movie information, and it is built to be fully responsive using Bootstrap.

 <a href="https://moviesplex2.netlify.app/" target="_blank"><strong>🚀 Try the Live Demo →</strong></a>

Features
Search: Find movies by title. Sort: Sort movies by release year or title. Category Filtering**: Filter movies by genre (e.g., Action, Comedy, Drama). Responsive: The app is designed to work well on mobile and desktop devices.

Technologies Used
HTML: For the structure of the web pages. CSS: For styling and layout. JavaScript: For interactive features like searching, sorting, and filtering. JSON: For storing movie data. Bootstrap**: For responsive layout and styling buttons.

Project Structure
The project follows this structure:

/MoviePlex 
├── index.html # Main HTML file 
├── styles.css # Custom styles 
├── script.js 
# JavaScript for interactivity 
├── movies.json # JSON file containing movie data 
├── /assets 
└── /images # Folder for movie posters/images


index.html: The main page containing the movie display and interactive features.
styles.css: Custom styles to enhance the appearance of the app.
script.js: Handles sorting, searching, and filtering functionality.
movies.json: Stores the data for the movies, including title, description, year, category, and image URL.

## JSON Data Format

The `movies.json` file is structured as an array of movie objects, where each object contains details about the movie:

```json
[
  {
    "id": 1,
    "title": "Movie Title 1",
    "year": 2023,
    "category": "Action",
    "description": "This is a short description of the movie.",
    "poster": "images/movie1.jpg"
  },
  {
    "id": 2,
    "title": "Movie Title 2",
    "year": 2022,
    "category": "Comedy",
    "description": "This is a short description of the movie.",
    "poster": "images/movie2.jpg"
  },
  {
    "id": 3,
    "title": "Movie Title 3",
    "year": 2021,
    "category": "Drama",
    "description": "This is a short description of the movie.",
    "poster": "images/movie3.jpg"
  }
]
Fields:
id: Unique identifier for the movie.
title: Name of the movie.
year: Year of release.
category: Genre of the movie (e.g., Action, Comedy).
description: Brief description of the movie plot.
poster: Path to the movie's poster image.
Features
1.Search Functionality
The user can search for movies by typing in the search bar. As the user types, the app filters movies whose title matches the search query.
2.Sort Functionality
Users can sort the movie list by Title or Release Year.
3.Category Filtering
Users can filter movies by category (e.g., Action, Comedy, Drama). The app displays only movies that match the selected category.
4.Responsive Design
The app is fully responsive, meaning it adjusts its layout to work well on both small and large screens, including mobile phones and desktops.
