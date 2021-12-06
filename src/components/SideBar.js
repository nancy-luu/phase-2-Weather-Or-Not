import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";

export default function SideBar ({city, handleCity, setCity}){
    return (
        <>
            <Search handleCity={handleCity}
            setCity={setCity}
            className="nested" />
            <WeatherReport city={city} className="nested" />
            <FavCities className="nested" />
        </>
    )
}