import React from "react";

export default function FavCities ( { setFavCity }){
    return (
        <>
            <select className="menu">
                <option value="All">Your Cities</option>
                <option value="city">{setFavCity}</option>
            </select>
        </>
    )
}
