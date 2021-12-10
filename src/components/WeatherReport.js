import React from "react";
import { Container } from 'react-bootstrap' ;

export default function WeatherReport ({ weather , handleSubmit }){
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

    const fogIcon =
        <div class="icon cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>

    const snowIcon = 
        <div class="icon flurries">
            <div class="cloud"></div>
            <div class="snow">
                <div class="flake"></div>
                <div class="flake"></div>
            </div>
        </div>

    function getWeatherIcon(weatherId) {
        switch(true){
            case weatherId >= 200 && weatherId <=232:
                const thunderStormIcon = 
                    <div class="icon thunder-storm">
                        <div class="cloud"></div>
                        <div class="lightning">
                            <div class="bolt"></div>
                            <div class="bolt"></div>
                        </div>
                    </div>
                return thunderStormIcon;
            case weatherId >= 300 && weatherId <=321:
                return snowIcon;
            case weatherId >= 500 && weatherId <=531:
                const rainIcon =
                    <div class="icon rainy">
                        <div class="cloud"></div>
                        <div class="rain"></div>
                    </div>
                return rainIcon;
            case weatherId >= 600 && weatherId <=622:
                return snowIcon; 
            case weatherId >= 701 && weatherId <=781:
                return fogIcon;  
            case weatherId === 800:
                const sunnyIcon = 
                    <div class="icon Sunny">
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                    </div>
                return sunnyIcon;
            case weatherId >= 800 && weatherId <=804:
                return fogIcon; 
            default:
                return fogIcon; 
        }
    }
    
    return (
        <>
            <Container className="report">
                <h2 className="cityName">{weather.name}</h2>
                <h5 className="weatherIcon">
                    {getWeatherIcon(weatherId)}
                </h5>
                <h4 className="weatherDescription">{weatherDescription}</h4>
                <h1 className="weatherDegree"> {Math.round(((weather.main.temp)-273.15)*9/5+32)}&deg;</h1>
                <h4 className="weatherMaxMin">{minmaxTemp(weather.main.temp_max, weather.main.temp_min)}</h4>
                <h4 className="detailTitle">Details:</h4>
                <h4 className="detail">Wind Speed: {(weather.wind.speed)} mph</h4>
                <h4 className="detail">Humidity: {(weather.main.humidity)}%</h4>
                <button 
                    className="favButton" 
                    type="submit"
                    onClick={handleSubmit}
                >Favorite</button>
            </Container>
        </>
    )
}