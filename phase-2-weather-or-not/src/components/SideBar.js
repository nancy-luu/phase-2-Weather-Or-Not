import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";

export default function SideBar (){
    return (
        <>
            <Search class="nested" />
            <WeatherReport class="nested" />
            <FavCities class="nested" />
        </>
    )
}