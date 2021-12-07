import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";
import { Container } from "react-bootstrap";

<<<<<<< HEAD
export default function SideBar ({ handleCity, setCity,lat,lng, weather}){
=======
export default function SideBar ({ weather, handleCity, setCity,lat,lng}){
>>>>>>> f9138380e159ebb0aac27542f9b498769582071e
    return (
        <>

            <Container className="SideBar">
                <Search 
                lat={lat}
                lng={lng}
                handleCity={handleCity}
                setCity={setCity}
                className="nested" />
<<<<<<< HEAD
                <WeatherReport className="nested" />
                weather={weather}
=======
                <WeatherReport 
                weather={weather}
                className="nested" />
>>>>>>> f9138380e159ebb0aac27542f9b498769582071e
                <FavCities className="nested" />
            </Container>

        </>
    )
}