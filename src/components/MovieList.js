import React from 'react'

const MovieList=(props)=>{
    return(
        <>
            {
            props.movies.map((movie,index)=>(
            <div key={movie.imdbID} className="d-flex justify-content-start m-1">
                <img src={movie.Poster} alt="some poster"/>
            </div>))
            } 
        </>
    )
}

export default MovieList;