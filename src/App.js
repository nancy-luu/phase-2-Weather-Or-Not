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
    const [lat, setLat] = useState(37.7749)
    const [lng, setLng] = useState(122.4194)
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((postion) => {
            setLat(postion.coords.latitude)
            setLng(postion.coords.longitude)
        }
    )
    }, [])

    function handleCity(e){
        e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3c1d63210fbee0969fa2f40280ef636`)
        .then((res) => res.json())
        .then((data) => setWeather(data))
        console.log(weather)
        // console.log(weather.coord.lon)
        // console.log(weather.coord.lat)

        // setLng(weather.coord.lon)
        // setLat(weather.coord.lat)
        
        // console.log(weather)     
        // console.log(city)
    }
    
  
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
                <SideBar 
                handleCity={handleCity}
                setCity={setCity}
                class="main"/>
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

