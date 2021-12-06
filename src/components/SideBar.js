import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";

export default function SideBar ({city, handleCity, setCity,lat,lng}){
    return (
        <>
            <Search 
            lat={lat}
            lng={lng}
            handleCity={handleCity}
            setCity={setCity}
            className="nested" />
            <WeatherReport className="nested" />
            <FavCities className="nested" />
        </>
    )
}