import React from "react";
import { DropdownButton } from "react-bootstrap";


export default function FavCities ( { favCity, handleSelect }){
    // console.log(favCity);

    return (
        <>
            <select className="menu">
                <option>Your Cities</option>
                {favCity.map((c) =>  
                    <option key={Math.random()} onChange={handleSelect}>{c}</option>
                )}
            </select>
        </>
    )
}


// let fetchObject = {
//     method: 'POST',
//     headers: 
//     {
//       "Content-Type": "application/json",
//       'Accept': "application/json"
//     },

//     body: JSON.stringify({
//       "name": setFavCity,
//     })
//   }