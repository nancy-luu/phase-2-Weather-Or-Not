import React, {useState, useEffect} from 'react';
import MapStyles from './MapStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';



import {
    GoogleMap,
    useLoadScript,
    // Marker,
    // InfoWindow,
} from "@react-google-maps/api";


const libraries = ["places"]
const mapContainerStyle = {
    width: '80vh',
    height: '60vh',   
}


const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,

}

// const APIKEY = ("e3c1d63210fbee0969fa2f40280ef636")
// lag and lng api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//By city api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function App(){

    const [lat, setLat] = useState(37.7749)
    const [lng, setLng] = useState(122.4194)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((postion) => {
            setLat(postion.coords.latitude)
            setLng(postion.coords.longitude)
        })
    }, [])
    // console.log(lat)
    // console.log(lng)

    const center = {
        lat: lat,
        lng: lng,
    }


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyC0cTA0LHGLFgzM3dg1MW0t07uNkrPr83g",
        libraries,
    })

    if (loadError) return "Error Loading Map";
    if (!isLoaded) return "Loading Maps..";

    
    return (
        <div>
            <Header />
            <section >
                <SideBar class="main"/>
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle}
                    zoom={10}
                    center={center}
                    options={options}
                ></GoogleMap>
            </section>
        </div>
    )
}

