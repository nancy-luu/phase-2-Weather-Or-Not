import React, {useState, useEffect} from 'react';
import MapStyles from './MapStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import {GoogleMap,useLoadScript,
    // Marker,InfoWindow
} from "@react-google-maps/api";

// const testAPI =(`https://api.openweathermap.org/data/2.5/weather?q=denver&appid=e3c1d63210fbee0969fa2f40280ef636`)

// const libraries = ["places"]
const mapContainerStyle = {
    width: '80vh',
    height: '60vh',   
}


const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,

}

// const lanlngAPI = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3c1d63210fbee0969fa2f40280ef636`)
// const APIKEY = ("e3c1d63210fbee0969fa2f40280ef636")
// lag and lng https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3c1d63210fbee0969fa2f40280ef636
// ex: https://api.openweathermap.org/data/2.5/weather?lat=39.7392&lon=104.9903&appid=e3c1d63210fbee0969fa2f40280ef636
//By city https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



export default function App(){

    const [libraries] = useState(["places"])
    const [lat, setLat] = useState(39.50)
    const [lon, setLon] = useState(-98.35)
    const [city, setCity] = useState("")
    const [zoom, setZoom] = useState(4.3)
    const [weather, setWeather] = useState({coord: {lon: "", lat: ""}})

    const cityAPI = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3c1d63210fbee0969fa2f40280ef636`)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((postion) => {
            setLat(postion.coords.latitude)
            setLon(postion.coords.longitude)
            setZoom(11.5)
        }
    )
    }, [])

    function handleCity(e){
        e.preventDefault()
        fetch(cityAPI)
        .then((res) => res.json())
        .then((data) =>  {
            setLon(data.coord.lon)
            setLat(data.coord.lat)
            })
    }

    const center = {
        lat: lat,
        lng: lon,
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
                <SideBar 
                city={city}
                handleCity={handleCity}
                setCity={setCity}
                class="main"/>
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle}
                    zoom={zoom}
                    center={center}
                    options={options}
                ></GoogleMap>
            </section>
        </div>
    )
}

