import React from "react";
import { Container, Row, Col } from 'react-bootstrap' ;


<<<<<<< HEAD

export default function WeatherReport ({weather}){

=======
export default function WeatherReport (){

>>>>>>> 313bc5e5 (useState Weather change)
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
                <h2>{weather.name}</h2>
                <h5 className="weatherIcon">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="weatherDegree"></h1>
                <h4 className="weatherMaxMin">{minmaxTemp(24, 19)}</h4>
                <h4 className="weatherDescription"></h4>
                <button className="favButton" type="submit">Favorite</button>
            </Container>
        </>
    )
}