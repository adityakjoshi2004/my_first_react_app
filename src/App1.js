import './App.css';
import React, { useState, useEffect } from "react"; 
import SearchIcon from './search.svg';
import MovieCard from './moviecard';


const API_URL = "http://www.omdbapi.com/?apikey=eef6b8d5"

// const movie1 = {
//     Poster: "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
// Title: "Italian Spiderman",
// Type: "movie",
// Year: "2007",
// imdbID: "tt2705436"

// }

const Appp = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);


    const searchMovies = async (title) => {
      try {
        const response = await fetch(`${API_URL}&s=${title}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
       setMovies(data.Search);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
  
    useEffect(() => {
      searchMovies("superman");
    }, []);
    

    return (
        <div className='app'>
            <h1>Movieland</h1>

                     <div className='search'>
                     <input
           placeholder="Search for movies"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
            </div>
            {
            movies?.length > 0
            ?(
            <div className='container'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} />

                ))}
            </div>   
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                    </div>
            )

        }
        </div>
    );
}


export default Appp;