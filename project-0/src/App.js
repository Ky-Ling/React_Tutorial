import { useEffect, useState } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCart from "./MovieCart";


const API_URL = "https://www.omdbapi.com?apikey=57185c9e";


const App = () => {
    
  const [movies, setMovies] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");


   // Fetch the data from the API as soon as our component loads
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  

  useEffect(() => {
    searchMovies("Spiderman");      
  }, []);

  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
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
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCart movie={movie}/>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found!</h2>
            </div>
          )
      }     
    </div>

  )
}


export default App;