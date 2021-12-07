import React from "react";
import { Container, 
    // Row, Col 
} from 'react-bootstrap' ;

export default function WeatherReport ({ weather }){

    function minmaxTemp(max, min){
        return(
            <p>
                <span className="px-4">{Math.round((max)-273.15)*9/5+32}&deg;</span>
                <span className="px-4">{Math.round((min)-273.15)*9/5+32}&deg;</span>
            </p>
        )
    }
<<<<<<< HEAD
    console.log(weather.name)
    console.log(weather.main.temp)
=======

    
>>>>>>> e82cb3b39da7db6684cba0591564304dcc33e877
    return (
        <>
            <Container className="report">
                <h2>{weather.name}</h2>
                <h5 className="weatherIcon">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="weatherDegree">{Math.round(((weather.main.temp)-273.15)*9/5+32)}&deg;</h1>
                <h4 className="weatherMaxMin">{minmaxTemp(weather.main.temp_max, weather.main.temp_min)}</h4>
                <h4 className="weatherDescription">{(weather.weather[0].description)}</h4>
                <button className="favButton" type="submit">Favorite</button>
            </Container>
        </>
    )
}
