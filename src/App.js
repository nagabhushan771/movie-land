import { useEffect, useState } from "react";

import "./App.css"; //impoerting the css file
import SearchIcon from "./search.svg"; //importing the search icon from search.svg
import MovieCard from "./MovieCard";
//api-key -> f8edd75a
// api -> http://www.omdbapi.com/?i=tt3896198&apikey=f8edd75a

// const movie1 = {
//     Title: "Italian Spiderman",
//     Year: "2007",
//     imdbID: "tt2705436",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//     // "Poster": "N/A"
// };

const API_URL = "http://www.omdbapi.com?apikey=f8edd75a";
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
        var response = await fetch(`${API_URL}&s=${title}`);
        var data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovie("Spiderman");
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Sreach for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie, index) => (
                        <MovieCard movie={movie} key={index} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
