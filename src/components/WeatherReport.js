import React from "react";
import { Container, Row, Col } from 'react-bootstrap' ;


export default function WeatherReport (){

    function minmaxTemp(min, max){
        return(
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
    


    return (
        <>
            <Container className="report">
                <h2>London</h2>
                <h5 className="weatherIcon">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="weatherDegree">25&deg;</h1>
                <h4 className="weatherMaxMin">{minmaxTemp(24, 19)}</h4>
                <h4 className="weatherDescription">Sunny</h4>
                <button className="favButton" type="submit">Favorite</button>
            </Container>
        </>
    )
}