import React from 'react'

const SearchBox=(props)=>{
    return (
        <div className="col">
        <input 
        className="form-control"
        type="text"
        placeholder="Type to Search"
        value={props.searchValue}
        onChange={(event)=>props.setSearchValue(event.target.value)}
        />
        </div>
        
    )
}

export default SearchBox