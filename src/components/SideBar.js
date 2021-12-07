import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";
import { Container } from "react-bootstrap";

export default function SideBar ({ weather, handleCity, setCity, lat, lng }){
    return (
        <>

            <Container className="SideBar">
                <Search 
                lat={lat}
                lng={lng}
                handleCity={handleCity}
                setCity={setCity}
                className="nested" />
                <WeatherReport 
                className="nested" 
<<<<<<< HEAD
                weather={weather}/>
=======
                weather={weather} />
>>>>>>> e82cb3b39da7db6684cba0591564304dcc33e877
                <FavCities className="nested" />
            </Container>
        </>
    )
}