import React from "react";

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
