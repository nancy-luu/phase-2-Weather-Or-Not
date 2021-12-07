import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";
import { Container } from "react-bootstrap";

export default function SideBar ({lanlngAPI, handleCity, setCity,lat,lng}){
    return (
        <>
            <Container className="SideBar">
                <Search 
                lanlngAPI={lanlngAPI}
                lat={lat}
                lng={lng}
                handleCity={handleCity}
                setCity={setCity}
                className="nested" />
                <WeatherReport className="nested" />
                <FavCities className="nested" />
            </Container>
        </>
    )
}