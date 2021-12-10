import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";
import FavCities from "./FavCities";
import { Container, Row, Col } from "react-bootstrap";

export default function SideBar ({ changeCoord,  mapFav, setZoom, weather, handleCity, setCity, lat, lng , handleSubmit, favCity, handleFavCity }){
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Search 
                        setZoom={setZoom}
                        lat={lat}
                        lng={lng}
                        handleCity={handleCity}
                        setCity={setCity}
                        className="search" />
                    </Col>
                    <Col >
                        <FavCities 
                        changeCoord={changeCoord}
                        mapFav={mapFav}
                            className="favCities" 
                            favCity={favCity} 
                            handleFavCity={handleFavCity}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="weatherReport">
                <WeatherReport 
                    weather={weather} 
                    handleSubmit={handleSubmit} 
                    favCity={favCity} 
                    handleFavCity={handleFavCity}
                />
            </Container>
        </>
    )
}