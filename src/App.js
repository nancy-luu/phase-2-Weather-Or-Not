import React, {useState, useEffect} from 'react';
import MapStyles from './MapStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import {GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";

const testAPI =(`https://api.openweathermap.org/data/2.5/weather?q=denver&appid=e3c1d63210fbee0969fa2f40280ef636`)

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
// lag and lng https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3c1d63210fbee0969fa2f40280ef636
// ex: https://api.openweathermap.org/data/2.5/weather?lat=39.7392&lon=104.9903&appid=e3c1d63210fbee0969fa2f40280ef636
//By city api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function App(){

    const [lat, setLat] = useState(40.7749)
    const [lng, setLng] = useState(122.4194)

    const lanlngAPI = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3c1d63210fbee0969fa2f40280ef636`)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((postion) => {
            setLat(postion.coords.latitude)
            setLng(postion.coords.longitude)
        }

    )
    }, [])

    
        fetch(lanlngAPI)
        .then((res) => res.json())
        .then((data) => console.log(data))
    
   
    
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

