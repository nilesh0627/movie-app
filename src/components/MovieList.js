import React from 'react'

const MovieList=(props)=>{
    const FavouriteComponent=props.favouriteComponent
    return(
        <>
            {props.movies.length!==0 ?
                props.movies.map((movie,index)=>(
                <div key={movie.imdbID} className="image-container d-flex justify-content-start m-2">
                    <img src={movie.Poster} alt={movie.Title} />
                    <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay">
                        <FavouriteComponent />
                    </div>
                </div>))
             :
            <div className="text-center">No Movies to show</div>
            }
        </>
    )
}

export default MovieList;