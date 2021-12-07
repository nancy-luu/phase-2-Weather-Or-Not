import React from "react";
import { Container, 
    // Row, Col 
} from 'react-bootstrap' ;

export default function WeatherReport ({ weather }){
    
    console.log(weather)

    function minmaxTemp(max, min){
        return(
            <p>
                <span className="px-4">{Math.round((max)-273.15)*9/5+32}&deg;</span>
                <span className="px-4">{Math.round((min)-273.15)*9/5+32}&deg;</span>
            </p>
        )
    }

    const weatherId = weather.weather[0].id

    function getWeatherIcon(weatherId) {
        switch(true){
            case weatherId >= 200 && weatherId <=232:
                return "wi-thunderstorm";
            case weatherId >= 300 && weatherId <=321:
                return "wi-sleet";
            case weatherId >= 500 && weatherId <=531:
                console.log("RAIN")
                return "wi-storm-showers";
            case weatherId >= 600 && weatherId <=622:
                return "wi-snow"; 
            case weatherId >= 701 && weatherId <=781:
                return "wi-fog";  
            case weatherId === 800:
                return "wi-day-sunny";
            case weatherId >= 800 && weatherId <=804:
                return "wi-day-fog";
            default:
                return "wi-day-fog";
        }
    }

    // console.log(weather)
    // console.log(weatherId)
    
    return (
        <>
            <Container className="report">
                <h2>{weather.name}</h2>
                <h5 className="weatherIcon">
                    <i className={`wi ${getWeatherIcon(weatherId)} display-1`} />
                </h5>
                <h1 className="weatherDegree">{Math.round(((weather.main.temp)-273.15)*9/5+32)}&deg;</h1>
                <h4 className="weatherMaxMin">{minmaxTemp(weather.main.temp_max, weather.main.temp_min)}</h4>
                <h4 className="weatherDescription">{(weather.weather[0].description)}</h4>
                <button className="favButton" type="submit">Favorite</button>
            </Container>
        </>
    )
}

