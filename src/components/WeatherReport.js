import React from "react";

export default function WeatherReport ({city}){
    return (
        <>
            <form className="NewReport">
                <div>({city})</div>
                <button className="button" type="submit">Favorite</button>
                <div>(weather info...)</div>
                <div>(weather info...)</div>
                <div>(weather info...)</div>
            </form>
        </>
    )
}
