import React, {useState, useEffect} from 'react';
import MapStyles from './MapStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import "weather-icons/css/weather-icons.css";
import { Container, Row, Col } from 'react-bootstrap' ;
import { GoogleMap,
    useLoadScript,
    // Marker,
    // InfoWindow
} from "@react-google-maps/api";

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
// const  https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3c1d63210fbee0969fa2f40280ef636
// ex: https://api.openweathermap.org/data/2.5/weather?lat=39.7392&lon=104.9903&appid=e3c1d63210fbee0969fa2f40280ef636
//By city https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function App(){

    const [libraries] = useState(["places"])
    const [lat, setLat] = useState(39.50)
    const [lng, setLng] = useState(-98.35)
    const [city, setCity] = useState("")
    const [zoom, setZoom] = useState(4.3)
    const [weather, setWeather] = useState({})

    // const cityAPI = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3c1d63210fbee0969fa2f40280ef636`)
    
    const lanlngAPI = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3c1d63210fbee0969fa2f40280ef636`)
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((postion) => {
            setLat(postion.coords.latitude)
            setLng(postion.coords.longitude)
            setZoom(11.5)
        }
    )
    }, [])

    function handleCity({lat,lng}){
        setLng(lng)
        setLat(lat)
    }

    useEffect(() =>{
        fetch(lanlngAPI)
        .then((res) => res.json())
        .then((weatherData) => setWeather(weatherData))
    }, [lat])

    console.log(weather)

   

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

            <Header className="header"/>
            <div className="video-background">
                <div className="video-foreground">
                    <iframe src="https://www.youtube.com/embed/Y8ACyHYsb6Q?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=Y8ACyHYsb6Q" frameBorder="0" allowFullScreen allow="autoplay"></iframe>
                </div>
                <div className="video-layer"></div>
            </div>
            <Container >
                <Row >
                    <Col>
                        <SideBar 
                        lanlngAPI={lanlngAPI}
                        lat={lat}
                        lng={lng}
                        city={city}
                        handleCity={handleCity}
                        setCity={setCity}
                        className="main"/>
                    </Col>
                    <Col className="map">
                        <GoogleMap 
                            mapContainerStyle={mapContainerStyle}
                            zoom={zoom}
                            center={center}
                            options={options}
                        ></GoogleMap>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

