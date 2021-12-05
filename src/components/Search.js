import React, {useEffect} from "react";

function Search (){

function findCity(e){
    e.preventDefault()
    fetch("api.openweathermap.org/data/2.5/weather?q=denver&appid=e3c1d63210fbee0969fa2f40280ef636")
        .then((res) => res.json())
        .then(weatherData => console.log(weatherData))
}




    return (
        <>
            <form onSubmit={findCity}>
                <h3>Search Your Weather</h3>
                <input type="text" name="search" placeholder="City Name..." />
                <button className="button" type="submit">Find</button>
            </form>
        </>
    )
}

export default Search;