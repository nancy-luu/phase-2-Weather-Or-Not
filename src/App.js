import React, { useState, useEffect } from 'react';
import MapStyles from './MapStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import "weather-icons/css/weather-icons.css";
import { Row, Col } from 'react-bootstrap';
import {
    GoogleMap,
    useLoadScript,
} from "@react-google-maps/api";
import { findByLabelText } from '@testing-library/react';

const mapContainerStyle = {
    position: 'absolute',
    display: 'inline-flex',
    width: '90%',
    height: '95%',
}

const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const defaultWeather = { name: "" ,
    main: { temp: "", humidity: "", temp_max: "", temp_min: "" },
    weather: [{ 0: { description: "", id: "" } },], wind: {speed: ""}
}

//const APIKEY = ("e3c1d63210fbee0969fa2f40280ef636")
//const APIKEY2 = ("b070945df6f0539dd3a684e6bc1640b7")
export default function App() {
    const [libraries] = useState(["places"])
    const [lng, setLng] = useState(-97.35)
    const [lat, setLat] = useState(39.50)
    const [yourLat, setYourLat] = useState(-97.35)
    const [yourLng, setYourLng] = useState(39.50)
    const [city, setCity] = useState("")
    const [zoom, setZoom] = useState(4.3)
    const [weather, setWeather] = useState(defaultWeather)
    const [favCity, setFavCity] = useState([])


    const lanlngAPI = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b070945df6f0539dd3a684e6bc1640b7`)

    useEffect(() => {
        fetch(lanlngAPI)
        .then((res) => res.json())
        .then((weatherData) => setWeather(weatherData))
    }, [lat,yourLat,yourLng])

    useEffect(() => {
        const successCallback = (position) =>{
            setLat(position.coords.latitude)
            setLng(position.coords.longitude)
            setYourLat(position.coords.latitude)
            setYourLng(position.coords.longitude)
            setZoom(11.5)
        }
        const errorCallback = (error) => {
            console.log(error)
            setLat(39.50)
            setLng(-98.35)
            setYourLat(39.50)
            setYourLng(-98.35)
        }
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback) 
        }, [])
 
    function curLocation() {
        setLat(yourLat)
        setLng(yourLng)
    }
    function handleCity({ lat, lng }) {
        setLng(lng)
        setLat(lat)
    }
    function googleMapsClick(event){
        setLat(event.latLng.lat())
        setLng(event.latLng.lng())
    }
    const center = {
        lat: lat,
        lng: lng,
    }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyC0cTA0LHGLFgzM3dg1MW0t07uNkrPr83g",
        libraries,
    })

    if (loadError) return "Error Loading Map";
    if (!isLoaded) return "Loading Maps..";

    const handleSubmit = () => {
        const newFavCities = [...favCity, weather]
        setFavCity(newFavCities);
    }
    
    const mapFav = favCity.map((city) =>  
    <option city={city} onClick={console.log("clicked city")}key={Math.random()}>{city.name}</option>
)
    function changeCoord(event){
        favCity.filter((city) => (city.name === event.target.value ? (setLat(city.coord.lat) , setLng(city.coord.lon)) : null)) 
    }
    
console.log(weather)
    return (
        <div>
            <Header className="header" />
            <div className="video-background">
                <div className="video-foreground">
                    <iframe title="sky" src="https://www.youtube.com/embed/Y8ACyHYsb6Q?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=Y8ACyHYsb6Q" frameBorder="0" allowFullScreen allow="autoplay"></iframe>
                </div>
                <div className="video-layer"></div>
            </div>
                <Row >
                    <Col className="sideBar">
                        <SideBar
                        setZoom={setZoom}
                            weather={weather}
                            lanlngAPI={lanlngAPI}
                            lat={lat}
                            lng={lng}
                            changeCoord={changeCoord}
                            handleCity={handleCity}
                            setCity={setCity}
                            handleSubmit={handleSubmit}
                            favCity={favCity}
                            setLng={setLng}
                            setLat={setLat}
                            mapFav={mapFav}
                            className="main" 
                        />
                    </Col>
                    <Col className="mapContainer">
                        <form className="box">
                        <GoogleMap
                            id="map"
                            className="googleMap"
                            mapContainerStyle={mapContainerStyle}
                            zoom={zoom}
                            center={center}
                            options={options}
                            onClick={(event => googleMapsClick(event))}
                            >
                        </GoogleMap>
                        <button className="yourLocation" type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                curLocation()}}
                        >📍</button>
                        </form>
                    </Col>
                </Row>
        </div>
    )
}

