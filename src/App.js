import './App.css';
import {useState,useEffect} from 'react'
import MovieList from './components/MovieList'
function App() {


  const [movies,setMovies] = useState([]);


  const getMovieRequest=async()=>{
    const url="http://www.omdbapi.com/?s=avengers&apikey=263d22d8";
    const response=await fetch(url)
    const responseJson=await response.json()
    setMovies(responseJson.Search)
    console.log(movies)
  }

  useEffect(()=>{
      getMovieRequest();
  }, [])
 
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies}/>
      </div>    
    </div>
  );
}

export default App;
