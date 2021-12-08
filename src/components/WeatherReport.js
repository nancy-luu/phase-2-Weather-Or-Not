import React from "react";
import { Container } from 'react-bootstrap' ;
import FavCities from './FavCities';

export default function WeatherReport ({ weather , handleClick }){
    function minmaxTemp(max, min){
        return(
            <p>
                <span className="px-4">High: {Math.round((max)-273.15)*9/5+32}&deg;</span>
                <span className="px-4">Low: {Math.round((min)-273.15)*9/5+32}&deg;</span>
            </p>
        )
    }

    const weatherId = weather.weather[0].id
    const weatherDescription = weather.weather[0].description

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
                <h2 className="cityName">{weather.name}</h2>
                <h5 className="weatherIcon">
                    <i className={`wi ${getWeatherIcon(weatherId)} display-1`} />
                </h5>
                <h4 className="weatherDescription">{weatherDescription}</h4>
                <h1 className="weatherDegree">{Math.round(((weather.main.temp)-273.15)*9/5+32)}&deg;</h1>
                <h4 className="weatherMaxMin">{minmaxTemp(weather.main.temp_max, weather.main.temp_min)}</h4>
                <h4 className="detailTitle">Details:</h4>
                <h4 className="detail">Wind Speed: {(weather.wind.speed)} mph</h4>
                <h4 className="detail">Humidity: {(weather.main.humidity)}%</h4>
                <button 
                    className="favButton" 
                    type="submit"
                    onClick={handleClick}
                >Favorite</button>
            </Container>
        </>
    )
}

