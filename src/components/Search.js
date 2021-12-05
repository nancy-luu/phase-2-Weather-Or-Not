import React from "react";

function Search (){
    return (
        <>
            <form>
                <h3>Search Your Weather</h3>
                <input type="text" name="search" placeholder="City Name..." />
                <button className="button" type="submit">Find</button>
            </form>
        </>
    )
}

export default Search;