import React from "react";
import { DropdownButton } from "react-bootstrap";


export default function FavCities ( { setFavCity }){

    return (
        <>
            <select className="menu">
                <option>Your Cities</option>
                {/* {setFavCity.map((favCity) =>  
                    <option 
                        key={Math.random()} 
                        favCityName={favCity.name} 
                        //   handleRender={handleRender}
                    />
                )} */}
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