import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";

export default function SideBar (){
    return (
        <>
            <Search className="nested" />
            <WeatherReport className="nested" />
            <FavCities className="nested" />
        </>
    )
}