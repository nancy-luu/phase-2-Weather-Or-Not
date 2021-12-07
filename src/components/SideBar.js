import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";
import { Container } from "react-bootstrap";

export default function SideBar ({ weather, handleCity, setCity,lat,lng}){
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
                weather={weather}
                className="nested" />
                <FavCities className="nested" />
            </Container>

        </>
    )
}