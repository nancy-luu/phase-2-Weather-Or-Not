import React from "react";

export default function FavCities ( {mapFav, changeCoord}){
    
    return (
        <>
            <select onChange={(event) => changeCoord(event)}className="menu" >
                <option >Your Cities</option>
                {mapFav}
            </select>
        </>
    )
}
