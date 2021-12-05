import React from 'react';
import MapStyles from './MapStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";


const libraries = ["places"]
const mapContainerStyle = {
    width: '80vh',
    height: '60vh',   
}
const center = {
    lat: 37.7749,
    lng: -122.4194,
}

const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,

}

export default function App(){
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

