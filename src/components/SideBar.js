import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";
import { Container } from "react-bootstrap";

export default function SideBar ({ handleCity, setCity,lat,lng, weather}){
    return (
        <>

            <Container className="SideBar">
                <Search 
                lat={lat}
                lng={lng}
                handleCity={handleCity}
                setCity={setCity}
                className="nested" />
                <WeatherReport className="nested" />
                weather={weather}
                <FavCities className="nested" />
            </Container>

        </>
    )
}