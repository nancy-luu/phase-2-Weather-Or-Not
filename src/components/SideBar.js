import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";

export default function SideBar ({handleCity, setCity}){
    return (
        <>
            <Search handleCity={handleCity}
            setCity={setCity}
            className="nested" />
            <WeatherReport className="nested" />
            <FavCities className="nested" />
        </>
    )
}