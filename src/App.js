import './App.css';
import {useState,useEffect} from 'react'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'

import AddFavourite from './components/AddFavourite'
import RemoveFavourite from './components/RemoveFavourite'

function App() {


  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('')
  const [favourites,setFavourites]=useState([])

  const getMovieRequest=async(searchValue)=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    const response=await fetch(url)
    const responseJson=await response.json()
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
    
    console.log(movies)
  }

  const saveToLocalStorage=(items)=>{
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(items))
  }

  useEffect(()=>{
      getMovieRequest(searchValue);
  }, [searchValue])

  useEffect(()=>{
    const newFavourites=JSON.parse(localStorage.getItem('react-movie-app-favourites'))
    if(newFavourites)
    setFavourites(newFavourites)
  },[])


  const addToFavourite=(movie)=>{
    const newFavourites=[...favourites,movie]
    setFavourites(newFavourites)
    saveToLocalStorage(newFavourites)
  }

  const removeFromFavourite=(movie)=>{
    const newFavourites=favourites.filter(favourite=>favourite.imdbID!==movie.imdbID)
    setFavourites(newFavourites)
   saveToLocalStorage(newFavourites)
  }

  
 
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center my-2">
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList handleFavouritesClick={addToFavourite} movies={movies} favouriteComponent={AddFavourite}/>
      </div> 
      <div className="row">
        <MovieListHeading heading="Favorites"/>
      </div>  
      <div className="row">
      <MovieList handleFavouritesClick={removeFromFavourite} movies={favourites} favouriteComponent={RemoveFavourite}/>
      </div> 
    </div>
  );
}

export default App;
