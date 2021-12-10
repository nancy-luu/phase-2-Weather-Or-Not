import React from "react";

export default function FavCities ( { favCity, setLng, setLat , handleFavCity }){
    // console.log(favCity)
    

    return (
        <>
            <select className="menu" onChange={(e) => handleFavCity()}>
                <option >Your Cities</option>
                {favCity.map((c) =>  
                    <option key={Math.random()}>{c.name}</option>
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
//       "name": favCity,
//     })
//   }