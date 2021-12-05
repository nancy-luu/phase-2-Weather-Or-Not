import React, {useState} from "react";

function Search ({handleCity, setCity}){



    return (
        <>
            <form onSubmit={handleCity}>
                <h3>Search Your Weather</h3>
                <input onChange={(e)=> setCity(e.target.value)}type="text" name="search" placeholder="City Name..." />
                <button className="button" type="submit">Find</button>
            </form>
        </>
    )
}

export default Search;