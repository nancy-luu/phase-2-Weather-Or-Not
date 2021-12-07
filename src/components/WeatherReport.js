import React from "react";
import { Container, 
    // Row, Col 
} from 'react-bootstrap' ;

export default function WeatherReport ({ weather }){

    function minmaxTemp(min, max){
        return(
            <p>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </p>
        )
    }
    
    return (
        <>
            <Container className="report">
                <h2>{weather.name}</h2>
                <h5 className="weatherIcon">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="weatherDegree">{weather.main.temp}</h1>
                <h4 className="weatherMaxMin">{minmaxTemp(24, 19)}</h4>
                <h4 className="weatherDescription">{weather.weather[0].description}</h4>
                <button className="favButton" type="submit">Favorite</button>
            </Container>
        </>
    )
}